// =====================================================================
//  DATI DELLA PASTICCERIA - modifica qui nome, contatti, orari, social
//  I valori segnati "DA INSERIRE" sono segnaposto: sostituiscili con
//  i dati reali. Nessun dato è stato inventato.
// =====================================================================

const BASE = import.meta.env.BASE_URL;
export const img = (path) => `${BASE}images/${path}`;

export const siteInfo = {
  name: "Tortatelier",
  legalName: "Gade s.n.c. di Carlo Demarco e Gambelli",
  vatAndFiscalCode: "12097890961",
  tagline: "Pasticceria artigianale",
  logoImage: img("logo-tortatelier.png"),
  description:
    "Torte, pasticcini, croissant, coffee break e catering con materie prime selezionate e tanta passione.",
  url: "https://www.tortatelier.it/",

  address: {
    street: "Via Pietro Maroncelli, 9",
    city: "20154 Milano",
  },
  phone: "+39 02 62 08 76 69",
  phoneLink: "+390262087669", // solo cifre, con prefisso internazionale
  email: "info@tortatelier.it",
  delivery: {
    home: "€12,00",
    outsideMilan: "Prezzo su richiesta",
  },
  // Inserire solo dopo aver verificato il numero WhatsApp Business.
  whatsappNumber: "",
  whatsappMessage: "Buongiorno, vorrei avere informazioni sui vostri prodotti.",

  instagram: "https://www.instagram.com/tortatelier/?hl=it",
  googleReviewsUrl: "https://www.google.com/maps/place/Tortatelier/@45.4829226,9.1832533,17z/data=!4m8!3m7!1s0x4786c1315b282185:0x74134d8bc0be2000!8m2!3d45.4829226!4d9.1832533!9m1!1b1!16s%2Fg%2F12hpgxhfl?hl=it",

  // Testo cercato su Google Maps: scrivi l'indirizzo reale della pasticceria
  mapsQuery: "Via Pietro Maroncelli 9, 20154 Milano",

  hours: [
    { day: "Lunedì - Venerdì", time: "7:30 - 18:30" },
    { day: "Sabato", time: "8:00 - 13:00" },
    { day: "Domenica", time: "Chiuso" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/prodotti", label: "Prodotti" },
  { to: "/torte", label: "Torte" },
  { to: "/catering", label: "Catering" },
  { to: "/natale", label: "Natale" },
  { to: "/contatti", label: "Contatti" },
];

export const seo = {
  "/": {
    title: "Tortatelier | Pasticceria artigianale",
    description:
      "Tortatelier: la dolcezza della tradizione, ogni giorno. Torte, pasticcini, brioche, biscotti e cioccolateria artigianali.",
  },
  "/chi-siamo": {
    title: "Chi siamo | Tortatelier",
    description:
      "La storia, la filosofia e i valori di Tortatelier: passione, qualità delle materie prime e lavorazione artigianale.",
  },
  "/prodotti": {
    title: "I nostri prodotti | Tortatelier",
    description:
      "Scopri le foto della biscotteria, della colazione e della pasticceria artigianale di Tortatelier.",
  },
  "/torte": {
    title: "Torte personalizzate | Tortatelier",
    description:
      "Scopri le torte artigianali personalizzate su ordinazione di Tortatelier.",
  },
  "/catering": {
    title: "Catering per eventi | Tortatelier",
    description:
      "Catering professionale per eventi con proposte artigianali dolci e salate, bevande e servizio di camerieri.",
  },
  "/natale": {
    title: "Specialità di Natale | Tortatelier",
    description:
      "Scopri le specialità natalizie artigianali di Tortatelier, disponibili in negozio e su ordinazione.",
  },
  "/contatti": {
    title: "Contatti e orari | Tortatelier",
    description:
      "Contatta Tortatelier: indirizzo, telefono, orari di apertura e modulo per richiedere informazioni.",
  },
  "/privacy": {
    title: "Privacy Policy | Tortatelier",
    description:
      "Informativa sul trattamento dei dati personali di Tortatelier.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Tortatelier",
    description:
      "Informativa sull\u2019uso dei cookie del sito di Tortatelier.",
  },
};
