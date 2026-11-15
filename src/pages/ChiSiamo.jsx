import { Link } from "react-router-dom";
import { Heart, Leaf, Award, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { img } from "../data/siteInfo";

const values = [
  {
    icon: Heart,
    title: "Passione",
    text: "Ogni dolce nasce dal piacere di creare qualcosa di buono per chi lo mangerà.",
  },
  {
    icon: Leaf,
    title: "Qualità",
    text: "Materie prime scelte con attenzione, senza scorciatoie.",
  },
  {
    icon: Award,
    title: "Artigianalità",
    text: "Lavorazioni manuali e tempi giusti, per un risultato autentico.",
  },
  {
    icon: Users,
    title: "Accoglienza",
    text: "Un luogo dove sentirsi a casa, tra consigli e sorrisi.",
  },
];

export default function ChiSiamo() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title="Una pasticceria fatta di mani e passione"
        text="Conosci Tortatelier: la nostra storia, il nostro modo di lavorare e ciò in cui crediamo."
      />

      <section className="section">
        <div className="container split">
          <Reveal className="split__media">
            <img
              src={img("site/benvenuti-tortatelier.webp")}
              alt="Un pasticcino Tortatelier con glassa rossa e cioccolato"
              loading="lazy"
              width="1171"
              height="768"
            />
          </Reveal>
          <Reveal className="split__text" delay={120}>
            <SectionTitle
              align="left"
              eyebrow="Presentazione"
              title="Benvenuti da Tortatelier"
            />
            <p className="lead">
              Nel cuore del quartiere Garibaldi, a Milano, il nostro laboratorio
              a vista è il cuore di Tortatelier.
            </p>
            <p>
              Qui, tra creatività, ricerca e ingredienti selezionati, nascono
              dolci che raccontano la nostra passione.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container split split--reverse">
          <Reveal className="split__media">
            <img
              src={img("site/luca-e-carlo.jpg")}
              alt="Luca Gambelli e Carlo De Marco, i due pasticceri di Tortatelier"
              loading="lazy"
              width="768"
              height="1024"
            />
          </Reveal>
          <Reveal className="split__text" delay={120}>
            <SectionTitle
              align="left"
              eyebrow="La nostra storia"
              title="Un incontro, un sogno condiviso"
            />
            <p>
              Siamo Carlo Demarco e Luca Gambelli. Ci siamo incontrati a Milano
              come colleghi e abbiamo scoperto di condividere un sogno: dare
              vita a una pasticceria tutta nostra.
            </p>
            <p>
              Dopo numerose esperienze tra pasticcerie e grandi cucine, abbiamo
              dato nuova vita a Tortatelier, a due passi da corso Como: il
              nostro piccolo mondo di colore, creatività e dolcezza.
            </p>
            <blockquote className="story-quote">
              «Il nostro obiettivo è realizzare dolci che siano eleganti come un
              abito di <em>haute couture</em> e buoni come la torta della
              nonna.»
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="split__media">
            <img
              src={img("site/materie-prime-lievitati.jpg")}
              alt="Assortimento di lievitati e prodotti da forno"
              loading="lazy"
              width="1031"
              height="768"
            />
          </Reveal>
          <Reveal className="split__text" delay={120}>
            <SectionTitle
              align="left"
              eyebrow="Materie prime"
              title="La qualità comincia dagli ingredienti"
            />
            <p>
              Burro, uova, farine, frutta e cioccolato: scegliamo ciò che entra
              nei nostri impasti con la massima attenzione, privilegiando la
              stagionalità.
            </p>
            <h3 className="subtitle">Lavorazione artigianale</h3>
            <p>
              Impastiamo, farciamo e decoriamo a mano, rispettando i tempi di
              ogni ricetta. Per questo ogni dolce è leggermente unico.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--beige section--values">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="I nostri valori"
              title="Ciò in cui crediamo"
            />
          </Reveal>
          <div className="grid grid--4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="value-card">
                <span className="features__icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="center mt">
            <Link to="/prodotti" className="btn btn--gold">
              Scopri i nostri prodotti
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
