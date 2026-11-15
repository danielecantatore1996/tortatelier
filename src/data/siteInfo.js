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
  shareImage: img("site/torta-gialla.png"),
  shareImageAlt: "Torta artigianale di Tortatelier con glassa gialla",
  description:
    "Prepariamo torte, pasticcini, croissant, coffee break e catering con materie prime selezionate e tanta passione.",
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
  googleReviewsUrl:
    "https://www.google.com/maps/place/Tortatelier/@45.4829226,9.1832533,17z/data=!4m8!3m7!1s0x4786c1315b282185:0x74134d8bc0be2000!8m2!3d45.4829226!4d9.1832533!9m1!1b1!16s%2Fg%2F12hpgxhfl?hl=it",

  // Testo cercato su Google Maps: scrivi l'indirizzo reale della pasticceria
  mapsQuery: "Via Pietro Maroncelli 9, 20154 Milano",

  hours: [
    {
      day: "Lunedì - Venerdì",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      time: "7:30 - 18:30",
    },
    { day: "Sabato", days: ["Saturday"], time: "8:00 - 13:00" },
    { day: "Domenica", days: ["Sunday"], time: "Chiuso" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo/", label: "Chi siamo" },
  { to: "/prodotti/", label: "Prodotti" },
  { to: "/torte/", label: "Torte" },
  { to: "/catering/", label: "Catering" },
  { to: "/natale/", label: "Natale" },
  { to: "/contatti/", label: "Contatti" },
];

export const seo = {
  "/": {
    title: "Tortatelier | Pasticceria artigianale a Milano",
    description:
      "Tortatelier, pasticceria artigianale vicino a Porta Garibaldi: torte, pasticcini, colazione e catering a Milano.",
  },
  "/chi-siamo": {
    title: "Chi siamo | Tortatelier",
    description:
      "La storia, la filosofia e i valori di Tortatelier: passione, qualità delle materie prime e lavorazione artigianale.",
  },
  "/prodotti": {
    title: "Pasticceria e colazione | Tortatelier",
    description:
      "Scopri pasticcini, biscotti, croissant e altre specialità artigianali di Tortatelier, dalla colazione alla pasticceria.",
  },
  "/torte": {
    title: "Torte personalizzate a Milano | Tortatelier",
    description:
      "Torte artigianali personalizzate su ordinazione a Milano, per compleanni e occasioni speciali. Scopri le creazioni di Tortatelier.",
  },
  "/catering": {
    title: "Catering per eventi a Milano | Tortatelier",
    description:
      "Catering per eventi a Milano con proposte artigianali dolci e salate, bevande e servizio di camerieri.",
  },
  "/natale": {
    title: "Specialità di Natale | Tortatelier",
    description:
      "Scopri le specialità natalizie artigianali di Tortatelier, disponibili in negozio e su ordinazione.",
  },
  "/contatti": {
    title: "Contatti e orari | Tortatelier",
    description:
      "Trova Tortatelier in via Pietro Maroncelli a Milano: indirizzo, telefono, orari di apertura e contatti.",
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

export function getPageMetadata(pathname) {
  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const data = seo[path];
  if (!data) return null;
  const url = new URL(path === "/" ? "/" : `${path}/`, siteInfo.url).href;
  const image = new URL(siteInfo.shareImage, siteInfo.url).href;
  return {
    ...data,
    url,
    openGraph: {
      "og:title": data.title,
      "og:description": data.description,
      "og:url": url,
      "og:image": image,
      "og:image:alt": siteInfo.shareImageAlt,
      "og:type": "website",
      "og:site_name": siteInfo.name,
      "og:locale": "it_IT",
    },
  };
}
