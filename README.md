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
- Nome, dati societari, indirizzo, telefono, email, WhatsApp, Instagram, orari, consegne, mappa e SEO: `src/data/siteInfo.js`
- Logo: `public/images/logo-tortatelier.png` (per sostituirlo aggiorna anche `logoImage` in `src/data/siteInfo.js`)
- Prodotti: categorie in `src/data/products.js` – aggiungi o rimuovi le foto nelle relative cartelle di `src/assets/product-gallery/` (JPEG o WebP); saranno incluse nella prossima build.
- Torte: la pagina `src/pages/Torte.jsx` mostra le foto della cartella `src/assets/product-gallery/torte/`.
- Catering: la pagina `src/pages/Catering.jsx` mostra le foto della cartella `src/assets/catering/` (JPEG o WebP); le modifiche saranno incluse nella prossima build.
- Natale: la pagina `src/pages/Natale.jsx` mostra le foto della cartella `src/assets/natale/` (JPEG o WebP). Il catalogo scaricabile è `public/catalogo-natale-2026.pdf`; aggiorna anche il testo e il collegamento nella pagina quando viene sostituito.
- Foto reali ricevute: `public/images/site/` (Luca e Carlo, interni, torta); foto di esempio aggiuntive: `public/images/products/` e `public/images/gallery/`
- Colori e font: variabili in `src/styles/global.css`
- Testi delle pagine: `src/pages/`
- Recensioni Google: widget Revys in `src/components/GoogleReviews.jsx`; il link alla scheda Google è configurato in `src/data/siteInfo.js`. Su GitHub Pages il widget viene caricato automaticamente in un iframe, non tramite PHP: le recensioni non sono nel codice HTML iniziale della pagina. Verificare con un professionista gli obblighi di privacy e consenso per il caricamento automatico.

Il modulo contatti apre il programma email del visitatore con una bozza indirizzata all'email configurata in `src/data/siteInfo.js`. Il visitatore deve inviarla manualmente; se non ha un programma email configurato può scrivere direttamente all'indirizzo indicato.
