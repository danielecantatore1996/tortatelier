import { img } from './siteInfo';

// Aggiungi/sostituisci le foto in public/images/gallery/ e aggiorna questi percorsi.
export const gallery = [
  { id: 1, src: img('site/torta-gialla.png'), alt: 'Torta moderna gialla decorata con un elemento al cioccolato', caption: 'Torta moderna', ratio: 'tall' },
  { id: 2, src: img('site/luca-e-carlo.jpg'), alt: 'Luca Gambelli e Carlo De Marco con due loro creazioni', caption: 'Luca e Carlo', ratio: 'wide' },
  { id: 3, src: img('site/interno-pasticceria.png'), alt: 'Gli interni di Tortatelier con le righe colorate del locale', caption: 'Il locale', ratio: 'square' },
  { id: 4, src: img('gallery/creazione-4.svg'), alt: 'Creazione al cioccolato', caption: 'Cioccolato', ratio: 'tall' },
  { id: 5, src: img('gallery/creazione-5.svg'), alt: 'Brioche appena sfornate', caption: 'Colazione', ratio: 'wide' },
  { id: 6, src: img('gallery/creazione-6.svg'), alt: 'Torta su richiesta', caption: 'Torta su richiesta', ratio: 'square' },
  { id: 7, src: img('gallery/creazione-7.svg'), alt: 'Dolce di stagione', caption: 'Dolce di stagione', ratio: 'tall' },
  { id: 8, src: img('gallery/creazione-8.svg'), alt: 'Biscotti artigianali', caption: 'Biscotteria', ratio: 'wide' },
  { id: 9, src: img('gallery/creazione-9.svg'), alt: 'Creazione per le celebrazioni', caption: 'Celebrazioni', ratio: 'square' },
];
