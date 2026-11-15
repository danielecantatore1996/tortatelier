# Tortatelier – sito vetrina

React + Vite + React Router, con pagine statiche indicizzabili per GitHub Pages sul dominio `www.tortatelier.it`.

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
- Per gli orari, modificare insieme `day` (etichetta mostrata), `days` (giorni in inglese per Google) e `time` (`7:30 - 18:30` oppure `Chiuso`): la build usa gli stessi orari visibili per i dati strutturati.
- Logo: `public/images/logo-tortatelier.png` (per sostituirlo aggiorna anche `logoImage` in `src/data/siteInfo.js`)
- Prodotti: categorie in `src/data/products.js` – aggiungi o rimuovi le foto nelle relative cartelle di `src/assets/product-gallery/` (JPEG o WebP); saranno incluse nella prossima build.
- Torte: la pagina `src/pages/Torte.jsx` mostra le foto della cartella `src/assets/product-gallery/torte/`.
- Catering: la pagina `src/pages/Catering.jsx` mostra le foto della cartella `src/assets/catering/` (JPEG o WebP); le modifiche saranno incluse nella prossima build.
- Natale: la pagina `src/pages/Natale.jsx` mostra le foto della cartella `src/assets/natale/` (JPEG o WebP). Il catalogo scaricabile è `public/catalogo-natale-2026.pdf`; aggiorna anche il testo e il collegamento nella pagina quando viene sostituito.
- Per le foto delle gallerie, usa nomi come `001-croissant-farcito-su-un-piattino.jpg`: il numero iniziale determina l'ordine e la descrizione diventa il testo ALT. Per nomi diversi viene usato un ALT generico della categoria.
- Foto reali ricevute: `public/images/site/` (Luca e Carlo, interni, torta); foto di esempio aggiuntive: `public/images/products/` e `public/images/gallery/`
- Colori e font: variabili in `src/styles/global.css`
- Testi delle pagine: `src/pages/`
- Recensioni Google: widget Revys in `src/components/GoogleReviews.jsx`; il link alla scheda Google è configurato in `src/data/siteInfo.js`. Su GitHub Pages il widget viene caricato automaticamente in un iframe, non tramite PHP: le recensioni non sono nel codice HTML iniziale della pagina. Verificare con un professionista gli obblighi di privacy e consenso per il caricamento automatico.

Il modulo contatti apre il programma email del visitatore con una bozza indirizzata all'email configurata in `src/data/siteInfo.js`. Il visitatore deve inviarla manualmente; se non ha un programma email configurato può scrivere direttamente all'indirizzo indicato.

## Pubblicazione e indicizzazione

La build genera un file HTML per ogni percorso presente in `seo` in `src/data/siteInfo.js`, oltre alla sitemap e ai dati strutturati dell'attività. Quando si aggiunge una pagina, aggiungere anche il relativo percorso a `seo`. I vecchi collegamenti con `#/` vengono aperti automaticamente sul nuovo percorso.

Il progetto è configurato per la radice del dominio personalizzato, non per una sottocartella GitHub Pages. `public/CNAME` mantiene il dominio durante i deploy e `public/robots.txt` indica la sitemap: aggiornare entrambi se cambia il dominio.

Per pubblicare, salvare e condividere prima le modifiche con il repository, quindi eseguire `npm run deploy`. Il comando ricostruisce il sito e pubblica `dist/` sul branch `gh-pages`; nelle impostazioni GitHub Pages occorre usare quel branch come sorgente e mantenere il dominio personalizzato. Dopo il deploy, verificare che la home, un percorso come `/torte/`, `/robots.txt` e `/sitemap.xml` siano raggiungibili via HTTPS.

### Google Search Console
1. Aprire [Search Console](https://search.google.com/search-console/) e aggiungere una proprietà di tipo **Dominio**, inserendo `tortatelier.it` senza protocollo né `www`.
2. Copiare il record TXT di verifica fornito da Google. Nel pannello DNS Aruba aggiungere un record TXT per il dominio principale con quel valore, senza modificare gli altri record; usare il campo host richiesto da Aruba per la radice del dominio. Attendere la propagazione e selezionare **Verifica** in Search Console. Mantenere il record TXT per conservare la verifica. [Istruzioni Google per la verifica](https://support.google.com/webmasters/answer/9008080?hl=it).
3. Nella sezione **Sitemap**, inviare `https://www.tortatelier.it/sitemap.xml` e controllarne lo stato. Usare **Controllo URL** sulle pagine principali e, se necessario, richiederne l'indicizzazione.
4. Monitorare **Indicizzazione delle pagine**, **Rendimento** e **Segnali web essenziali**; i dati possono richiedere tempo. Per controlli di laboratorio e dati reali disponibili, usare anche [PageSpeed Insights](https://pagespeed.web.dev/).

L'invio della sitemap non garantisce indicizzazione o posizionamento; Google decide tempi e risultati.
