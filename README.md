# Tortatelier – sito vetrina

React + Vite + React Router (HashRouter, compatibile con GitHub Pages).

## Comandi
```bash
npm install        # installa le dipendenze
npm run dev        # sviluppo (http://localhost:5173)
npm run build      # build di produzione in dist/
npm run preview    # anteprima della build
npm run deploy     # pubblica dist/ sul branch gh-pages
npm run images     # rigenera le immagini segnaposto
```

## Dove modificare
- Nome, indirizzo, telefono, email, WhatsApp, Instagram, orari, mappa, endpoint modulo, SEO: `src/data/siteInfo.js`
- Logo: `public/images/logo-tortatelier.png` (per sostituirlo aggiorna anche `logoImage` in `src/data/siteInfo.js`)
- Prodotti: `src/data/products.js` – foto in `public/images/products/`
- Galleria: `src/data/gallery.js` – foto in `public/images/gallery/`
- Foto reali ricevute: `public/images/site/` (Luca e Carlo, interni, torta); foto di esempio aggiuntive: `public/images/products/` e `public/images/gallery/`
- Colori e font: variabili in `src/styles/global.css`
- Testi delle pagine: `src/pages/`
