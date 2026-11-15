import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const temporaryDirectory = await mkdtemp(join(tmpdir(), 'tortatelier-prerender-'));

try {
  await build({
    configFile: 'vite.config.js',
    logLevel: 'error',
    ssr: { noExternal: true },
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: temporaryDirectory,
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: 'entry.mjs' } },
    },
  });

  const { render, seo, siteInfo, getPageMetadata } = await import(pathToFileURL(join(temporaryDirectory, 'entry.mjs')));
  const template = await readFile('dist/index.html', 'utf8');
  const escapeHtml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const urls = [];
  const city = siteInfo.address.city.match(/^(\d{5})\s+(.+)$/);
  if (!city) throw new Error('La città deve contenere CAP e località per i dati strutturati.');
  const business = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: siteInfo.name,
    url: siteInfo.url,
    logo: new URL(siteInfo.logoImage, siteInfo.url).href,
    image: new URL(siteInfo.shareImage, siteInfo.url).href,
    telephone: siteInfo.phone,
    email: siteInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteInfo.address.street,
      addressLocality: city[2],
      postalCode: city[1],
      addressCountry: 'IT',
    },
    sameAs: [siteInfo.instagram],
    openingHoursSpecification: siteInfo.hours.map(({ day, days, time }) => {
      const hours = time.match(/^(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})$/);
      if (!Array.isArray(days) || !days.length || (time !== 'Chiuso' && !hours)) {
        throw new Error(`Giorni o orario non validi per ${day}: ${time}`);
      }
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: days,
        opens: hours ? hours[1].padStart(5, '0') : '00:00',
        closes: hours ? hours[2].padStart(5, '0') : '00:00',
      };
    }),
  };
  const structuredData = JSON.stringify(business).replace(/</g, '\\u003c');
  const titlePattern = /<title>[^<]*<\/title>/;
  const descriptionPattern = /<meta\s+name="description"\s+content="[^"]*"\s*\/>/;
  if (!titlePattern.test(template) || !descriptionPattern.test(template) || !template.includes('<div id="root"></div>')) {
    throw new Error('Il modello HTML non contiene titolo, descrizione o elemento root attesi.');
  }

  for (const path of Object.keys(seo)) {
    const pagePath = path === '/' ? '/' : `${path}/`;
    const metadata = getPageMetadata(pagePath);
    const canonical = metadata.url;
    urls.push(canonical);
    const openGraphTags = Object.entries(metadata.openGraph).map(([property, content]) => `  <meta property="${property}" content="${escapeHtml(content)}" />`).join('\n');
    const html = template
      .replace(titlePattern, `<title>${escapeHtml(metadata.title)}</title>`)
      .replace(descriptionPattern, `<meta name="description" content="${escapeHtml(metadata.description)}" />`)
      .replace('</head>', `  <link rel="canonical" href="${escapeHtml(canonical)}" />\n${openGraphTags}\n  <script type="application/ld+json">${structuredData}</script>\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${render(pagePath)}</div>`);
    const directory = join('dist', path === '/' ? '' : path.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, 'index.html'), html);
  }

  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`).join('\n')}\n</urlset>\n`);
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
