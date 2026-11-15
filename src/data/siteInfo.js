// =====================================================================
//  DATI DELLA PASTICCERIA - modifica qui nome, contatti, orari, social
//  I valori segnati "DA INSERIRE" sono segnaposto: sostituiscili con
//  i dati reali. Nessun dato è stato inventato.
// =====================================================================

const BASE = import.meta.env.BASE_URL;
export const img = (path) => `${BASE}images/${path}`;

export const siteInfo = {
  name: 'Tortatelier',
  tagline: 'Pasticceria artigianale',
  logoImage: img('logo-tortatelier.png'),
  description:
    'Torte, pasticcini, brioche, biscotti e cioccolateria preparati ogni giorno con materie prime selezionate e tanta passione.',
  url: 'https://www.tortatelier.it/',

  address: {
    street: 'Via Pietro Maroncelli, 9',
    city: '20154 Milano',
  },
  phone: '+39 02 62 08 76 69',
  phoneLink: '+390262087669', // solo cifre, con prefisso internazionale
  email: 'info@tortatelier.it',
  // Inserire solo dopo aver verificato il numero WhatsApp Business.
  whatsappNumber: '',
  whatsappMessage: 'Buongiorno, vorrei avere informazioni sui vostri prodotti.',

  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',

  // Testo cercato su Google Maps: scrivi l'indirizzo reale della pasticceria
  mapsQuery: 'Via Pietro Maroncelli 9, 20154 Milano',

  hours: [
    { day: 'Lunedì - Venerdì', time: '7:30 - 18:30' },
    { day: 'Sabato', time: '8:00 - 13:00' },
    { day: 'Domenica', time: 'Chiuso' },
  ],
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/chi-siamo', label: 'Chi siamo' },
  { to: '/prodotti', label: 'Prodotti' },
  { to: '/creazioni', label: 'Le nostre creazioni' },
  { to: '/contatti', label: 'Contatti' },
];

export const seo = {
  '/': {
    title: 'Tortatelier | Pasticceria artigianale',
    description: 'Tortatelier: la dolcezza della tradizione, ogni giorno. Torte, pasticcini, brioche, biscotti e cioccolateria artigianali.',
  },
  '/chi-siamo': {
    title: 'Chi siamo | Tortatelier',
    description: 'La storia, la filosofia e i valori di Tortatelier: passione, qualità delle materie prime e lavorazione artigianale.',
  },
  '/prodotti': {
    title: 'I nostri prodotti | Tortatelier',
    description: 'Scopri torte, pasticcini, brioche, biscotti, cioccolateria, prodotti stagionali e specialità della casa.',
  },
  '/creazioni': {
    title: 'Le nostre creazioni | Tortatelier',
    description: 'La galleria delle creazioni di Tortatelier: torte decorate e dolci preparati a mano.',
  },
  '/contatti': {
    title: 'Contatti e orari | Tortatelier',
    description: 'Contatta Tortatelier: indirizzo, telefono, orari di apertura e modulo per richiedere informazioni.',
  },
  '/privacy': { title: 'Privacy Policy | Tortatelier', description: 'Informativa sul trattamento dei dati personali di Tortatelier.' },
  '/cookie-policy': { title: 'Cookie Policy | Tortatelier', description: 'Informativa sull\u2019uso dei cookie del sito di Tortatelier.' },
};
