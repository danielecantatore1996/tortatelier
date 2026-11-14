import { Link } from 'react-router-dom';
import { Heart, Leaf, Award, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { img } from '../data/siteInfo';

const values = [
  { icon: Heart, title: 'Passione', text: 'Ogni dolce nasce dal piacere di creare qualcosa di buono per chi lo mangerà.' },
  { icon: Leaf, title: 'Qualità', text: 'Materie prime scelte con attenzione, senza scorciatoie.' },
  { icon: Award, title: 'Artigianalità', text: 'Lavorazioni manuali e tempi giusti, per un risultato autentico.' },
  { icon: Users, title: 'Accoglienza', text: 'Un luogo dove sentirsi a casa, tra consigli e sorrisi.' },
];

export default function ChiSiamo() {
  return (
    <>
      <PageHero eyebrow="Chi siamo" title="Una pasticceria fatta di mani e passione" text="Conosci Tortatelier: la nostra storia, il nostro modo di lavorare e ciò in cui crediamo." />

      <section className="section">
        <div className="container split">
          <Reveal className="split__media"><img src={img('site/interno-pasticceria.png')} alt="Gli interni di Tortatelier, con arredi e dettagli a righe colorate" loading="lazy" width="1330" height="760" /></Reveal>
          <Reveal className="split__text" delay={120}>
            <SectionTitle align="left" eyebrow="Presentazione" title="Benvenuti da Tortatelier" />
            <p className="lead">Tortatelier è la pasticceria artigianale di Luca Gambelli e Carlo De Marco, a Milano.</p>
            <p>Tra torte, pasticcini e creazioni da ricorrenza, ogni proposta nasce dalla cura per il dettaglio e dal piacere di realizzare dolci da condividere.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container split split--reverse">
          <Reveal className="split__media"><img src={img('site/luca-e-carlo.jpg')} alt="Luca Gambelli e Carlo De Marco, i due pasticceri di Tortatelier" loading="lazy" width="768" height="1024" /></Reveal>
          <Reveal className="split__text" delay={120}>
            <SectionTitle align="left" eyebrow="Storia e tradizione" title="Dalla tradizione al gusto di oggi" />
            <p>Luca Gambelli e Carlo De Marco sono i pasticceri che danno forma alle creazioni di Tortatelier. Il loro lavoro unisce attenzione alla presentazione e passione per la pasticceria artigianale.</p>
            <h3 className="subtitle">Filosofia e passione</h3>
            <p>Crediamo in una pasticceria onesta: pochi ingredienti, scelti bene e lavorati con cura. Il dolce giusto è quello che sa di casa, di festa e di buono.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="split__media"><img src={img('site/materie-prime.svg')} alt="Materie prime selezionate" loading="lazy" width="800" height="600" /></Reveal>
          <Reveal className="split__text" delay={120}>
            <SectionTitle align="left" eyebrow="Materie prime" title="La qualità comincia dagli ingredienti" />
            <p>Burro, uova, farine, frutta e cioccolato: scegliamo ciò che entra nei nostri impasti con la massima attenzione, privilegiando la stagionalità.</p>
            <h3 className="subtitle">Lavorazione artigianale</h3>
            <p>Impastiamo, farciamo e decoriamo a mano, rispettando i tempi di ogni ricetta. Per questo ogni dolce è leggermente unico.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <Reveal><SectionTitle eyebrow="Il laboratorio e il team" title="Le persone e il luogo dietro ai dolci" text="Luca e Carlo in pasticceria, tra le creazioni e i dettagli colorati del locale." /></Reveal>
          <div className="grid grid--2">
            <Reveal className="photo"><img src={img('site/luca-e-carlo.jpg')} alt="Luca Gambelli e Carlo De Marco con due loro creazioni" loading="lazy" width="768" height="1024" /><span>Luca e Carlo, i pasticceri</span></Reveal>
            <Reveal className="photo" delay={100}><img src={img('site/interno-pasticceria.png')} alt="Un angolo del locale Tortatelier con le sue righe colorate" loading="lazy" width="1330" height="760" /><span>Il locale Tortatelier</span></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><SectionTitle eyebrow="I nostri valori" title="Ciò in cui crediamo" /></Reveal>
          <div className="grid grid--4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="value-card">
                <span className="features__icon"><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="center mt"><Link to="/prodotti" className="btn btn--gold">Scopri i nostri prodotti</Link></Reveal>
        </div>
      </section>
    </>
  );
}
