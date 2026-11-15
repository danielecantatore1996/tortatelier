import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import { photoAlt } from '../src/data/photoAlt.js';

const pages = [
  ['', 'L&#x27; arte di creare momenti indimenticabili.'],
  ['chi-siamo/', 'Una pasticceria fatta di mani e passione'],
  ['prodotti/', 'I nostri prodotti'],
  ['torte/', 'Torte personalizzate a Milano'],
  ['catering/', 'Catering per eventi a Milano'],
  ['natale/', 'Il Natale di Tortatelier'],
  ['contatti/', 'Vieni a trovarci'],
  ['privacy/', 'Privacy Policy'],
  ['cookie-policy/', 'Cookie Policy'],
];

test('le pagine pubblicate contengono contenuti, metadati e risorse indicizzabili', async () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const [path, heading] of pages) {
    const html = await readFile(join('dist', path, 'index.html'), 'utf8');
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(title);
    assert.ok(description);
    assert.ok(!titles.has(title));
    assert.ok(!descriptions.has(description));
    titles.add(title);
    descriptions.add(description);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
    assert.ok(html.includes(heading));
    const url = `https://www.tortatelier.it/${path}`;
    assert.ok(html.includes(`<link rel="canonical" href="${url}"`));
    for (const [property, value] of Object.entries({
      'og:title': title,
      'og:description': description,
      'og:url': url,
      'og:image': 'https://www.tortatelier.it/images/site/torta-gialla.png',
      'og:image:alt': 'Torta artigianale di Tortatelier con glassa gialla',
      'og:type': 'website',
    })) {
      assert.ok(html.includes(`<meta property="${property}" content="${value}"`), `${path}: ${property}`);
      assert.equal((html.match(new RegExp(`property="${property}"`, 'g')) || []).length, 1);
    }
    const json = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1];
    assert.ok(json);
    const business = JSON.parse(json);
    assert.equal(business['@type'], 'Bakery');
    assert.equal(business.url, 'https://www.tortatelier.it/');
    assert.equal(business.image, 'https://www.tortatelier.it/images/site/torta-gialla.png');
    assert.equal(business.logo, 'https://www.tortatelier.it/images/logo-tortatelier.png');
    assert.deepEqual(business.openingHoursSpecification.map(({ dayOfWeek, opens, closes }) => ({ dayOfWeek, opens, closes })), [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '18:30' },
      { dayOfWeek: ['Saturday'], opens: '08:00', closes: '13:00' },
      { dayOfWeek: ['Sunday'], opens: '00:00', closes: '00:00' },
    ]);
    assert.ok(html.includes('7:30 - 18:30') && html.includes('8:00 - 13:00') && html.includes('Chiuso'));
    for (const [, url] of html.matchAll(/(?:src|href)="(\/(?:assets|images)\/[^"]+)"/g)) {
      await access(join('dist', decodeURIComponent(url.replace(/&amp;/g, '&')).slice(1)));
    }
  }
});

test('la sitemap elenca gli indirizzi reali e il dominio resta configurato', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(new Set(urls), new Set(pages.map(([path]) => `https://www.tortatelier.it/${path}`)));
  assert.equal(urls.length, pages.length);
  const robots = await readFile('dist/robots.txt', 'utf8');
  assert.match(robots, /Sitemap: https:\/\/www\.tortatelier\.it\/sitemap\.xml/);
  assert.doesNotMatch(robots, /^Disallow:\s*\/$/m);
  assert.equal((await readFile('dist/CNAME', 'utf8')).trim(), 'www.tortatelier.it');
});

test('i nomi descrittivi diventano ALT e le nuove foto senza descrizione hanno un fallback', () => {
  assert.equal(photoAlt('../assets/catering/004-tavolo-con-bicchieri.jpeg', 'Foto catering 4'), 'Tavolo con bicchieri');
  assert.equal(photoAlt('../assets/catering/nuova-foto.webp', 'Foto catering 5'), 'Foto catering 5');
});

test('le gallerie prerenderizzate mostrano ALT descrittivi per le foto', async () => {
  for (const [path, alt] of [
    ['', 'Torta arcobaleno con confetti colorati'],
    ['prodotti/', 'Croissant farcito su un piattino'],
    ['torte/', 'Torta a forma di abito verde con personaggio'],
    ['catering/', 'Tavolo catering con bicchieri e personale'],
    ['natale/', 'Panettone su una confezione natalizia davanti a un albero'],
  ]) {
    const html = await readFile(join('dist', path, 'index.html'), 'utf8');
    assert.ok(html.includes(`alt="${alt}"`), `${path}: ${alt}`);
  }
});
