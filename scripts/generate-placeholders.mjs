// Genera immagini segnaposto SVG eleganti. Sostituiscile con le tue fotografie
// (stesso nome file oppure aggiornando i percorsi in src/data/*.js).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = (p) => join(process.cwd(), 'public', 'images', p);

const palettes = {
  torte: ['#f3dfc3', '#d9a877', '#5a3a28'],
  pasticcini: ['#f8e3dd', '#e3a9a0', '#6b3a34'],
  colazione: ['#f7e6c4', '#d8a24f', '#6a4318'],
  biscotti: ['#f1e0c6', '#c99a62', '#553620'],
  cioccolato: ['#e6d3c0', '#7b4a32', '#2f1a10'],
  stagionali: ['#efe6cc', '#b9a05a', '#4d4220'],
  specialita: ['#f4e7d3', '#c9a86a', '#3b2418'],
  laboratorio: ['#efe3cf', '#b58b5c', '#3b2418'],
  staff: ['#f1e7da', '#a98466', '#3b2418'],
  negozio: ['#f5ecdd', '#caa97a', '#3b2418'],
};

function motif(kind, c) {
  const [, mid, dark] = c;
  switch (kind) {
    case 'torte':
      return `<ellipse cx="400" cy="560" rx="230" ry="48" fill="${dark}" opacity=".12"/>
      <rect x="190" y="430" width="420" height="120" rx="14" fill="${mid}"/>
      <rect x="230" y="340" width="340" height="100" rx="14" fill="${dark}" opacity=".85"/>
      <rect x="270" y="260" width="260" height="90" rx="14" fill="${mid}"/>
      <circle cx="400" cy="235" r="26" fill="#c9a86a"/><circle cx="400" cy="235" r="10" fill="#fff" opacity=".5"/>`;
    case 'pasticcini':
      return `<ellipse cx="400" cy="560" rx="170" ry="34" fill="${dark}" opacity=".12"/>
      <path d="M250 540 L300 400 H500 L550 540Z" fill="${mid}"/>
      <path d="M290 410 Q400 280 510 410Z" fill="${dark}" opacity=".85"/>
      <circle cx="400" cy="300" r="22" fill="#c9a86a"/>`;
    case 'colazione':
      return `<ellipse cx="400" cy="560" rx="230" ry="40" fill="${dark}" opacity=".12"/>
      <path d="M170 520 Q200 300 400 290 Q600 300 630 520 Q520 440 400 450 Q280 440 170 520Z" fill="${mid}"/>
      <path d="M300 330 Q400 420 500 330" stroke="${dark}" stroke-width="10" fill="none" opacity=".35"/>
      <path d="M250 400 Q400 480 550 400" stroke="${dark}" stroke-width="10" fill="none" opacity=".35"/>`;
    case 'biscotti':
      return `<ellipse cx="400" cy="570" rx="230" ry="36" fill="${dark}" opacity=".12"/>
      <circle cx="300" cy="400" r="95" fill="${mid}"/><circle cx="500" cy="430" r="95" fill="${dark}" opacity=".8"/>
      <circle cx="400" cy="300" r="80" fill="${mid}" opacity=".9"/>
      <g fill="${dark}" opacity=".5"><circle cx="270" cy="380" r="9"/><circle cx="330" cy="430" r="9"/><circle cx="380" cy="290" r="8"/><circle cx="430" cy="320" r="8"/></g>`;
    case 'cioccolato':
      return `<ellipse cx="400" cy="570" rx="230" ry="36" fill="${dark}" opacity=".15"/>
      <rect x="200" y="380" width="170" height="170" rx="16" fill="${dark}"/>
      <rect x="400" y="380" width="170" height="170" rx="16" fill="${mid}"/>
      <rect x="300" y="210" width="170" height="170" rx="16" fill="${dark}" opacity=".85"/>
      <circle cx="285" cy="465" r="26" fill="#c9a86a"/>`;
    case 'stagionali':
      return `<ellipse cx="400" cy="570" rx="200" ry="34" fill="${dark}" opacity=".12"/>
      <path d="M400 190 Q620 300 400 560 Q180 300 400 190Z" fill="${mid}"/>
      <path d="M400 230 V540" stroke="${dark}" stroke-width="8" opacity=".5"/>
      <path d="M400 330 L470 290 M400 400 L480 350 M400 330 L330 290 M400 400 L320 350" stroke="${dark}" stroke-width="6" opacity=".4"/>`;
    case 'specialita':
      return `<ellipse cx="400" cy="570" rx="200" ry="34" fill="${dark}" opacity=".15"/>
      <path d="M400 170 L450 300 L590 310 L482 395 L520 530 L400 455 L280 530 L318 395 L210 310 L350 300Z" fill="${mid}"/>
      <circle cx="400" cy="370" r="46" fill="${dark}" opacity=".85"/>`;
    case 'laboratorio':
      return `<rect x="150" y="470" width="500" height="30" rx="8" fill="${dark}" opacity=".8"/>
      <rect x="200" y="300" width="170" height="170" rx="20" fill="${mid}"/>
      <path d="M470 470 Q480 300 560 300 Q640 300 650 470Z" fill="${dark}" opacity=".6"/>
      <circle cx="285" cy="250" r="28" fill="${dark}" opacity=".5"/>`;
    case 'staff':
      return `<circle cx="400" cy="300" r="85" fill="${mid}"/>
      <path d="M220 560 Q220 400 400 400 Q580 400 580 560Z" fill="${dark}" opacity=".8"/>
      <path d="M330 220 Q400 130 470 220Z" fill="#fff" opacity=".85"/>`;
    default:
      return `<path d="M120 560 V330 L400 190 L680 330 V560Z" fill="${mid}" opacity=".85"/>
      <rect x="330" y="400" width="140" height="160" rx="8" fill="${dark}" opacity=".85"/>
      <rect x="180" y="380" width="100" height="90" rx="6" fill="#fff" opacity=".6"/><rect x="520" y="380" width="100" height="90" rx="6" fill="#fff" opacity=".6"/>`;
  }
}

function svg(kind, w, h, seed) {
  const c = palettes[kind];
  const id = `g${seed}`;
  const shift = (seed * 37) % 60;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 ${Math.round((800 * h) / w)}" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}" stop-opacity=".55"/></linearGradient></defs>
<rect width="800" height="${Math.round((800 * h) / w)}" fill="url(#${id})"/>
<circle cx="${100 + shift * 5}" cy="${90 + shift}" r="${120 + shift}" fill="#fff" opacity=".18"/>
<g transform="translate(0 ${Math.round(((800 * h) / w - 640) / 2)})">${motif(kind, c)}</g>
</svg>`;
}

let seed = 1;
const make = (path, kind, w = 4, h = 3) => writeFileSync(out(path), svg(kind, w, h, seed++));

const products = {
  torte: ['torta-ricotta', 'torta-cioccolato', 'torta-frutta'],
  pasticcini: ['mignon-assortiti', 'tartelletta-frutta'],
  colazione: ['cornetto', 'brioche-crema'],
  biscotti: ['frollini', 'cantucci'],
  cioccolato: ['tavoletta', 'cioccolatini'],
  stagionali: ['dolce-stagione', 'dolce-festivita'],
  specialita: ['specialita-casa', 'torta-celebrazione'],
};
for (const [kind, list] of Object.entries(products)) list.forEach((n) => make(`products/${n}.svg`, kind));

const gallery = [
  ['creazione-1', 'torte', 4, 5], ['creazione-2', 'pasticcini', 4, 3], ['creazione-3', 'specialita', 1, 1],
  ['creazione-4', 'cioccolato', 4, 5], ['creazione-5', 'colazione', 4, 3], ['creazione-6', 'torte', 1, 1],
  ['creazione-7', 'stagionali', 4, 5], ['creazione-8', 'biscotti', 4, 3], ['creazione-9', 'specialita', 1, 1],
];
gallery.forEach(([n, k, w, h]) => make(`gallery/${n}.svg`, k, w, h));

make('site/hero.svg', 'torte', 4, 3);
make('site/laboratorio.svg', 'laboratorio', 4, 3);
make('site/storia.svg', 'laboratorio', 4, 5);
make('site/staff.svg', 'staff', 4, 3);
make('site/negozio.svg', 'negozio', 4, 3);
make('site/materie-prime.svg', 'stagionali', 4, 3);
console.log('Immagini segnaposto generate.');
