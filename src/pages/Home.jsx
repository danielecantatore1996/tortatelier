import { Link } from 'react-router-dom';
import { Wheat, HandHeart, Clock, MapPin, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { products } from '../data/products';
import { gallery } from '../data/gallery';
import { siteInfo, img } from '../data/siteInfo';
import '../styles/home.css';

const craft = [
  { icon: Wheat, title: 'Ingredienti selezionati', text: 'Scegliamo con cura le materie prime, privilegiando qualità e stagionalità.' },
  { icon: HandHeart, title: 'Fatto a mano', text: 'Ogni dolce è lavorato con pazienza, dall\u2019impasto alla decorazione finale.' },
  { icon: Clock, title: 'Preparato ogni giorno', text: 'Impasti, creme e cotture si ripetono ogni giorno per garantire freschezza.' },
];

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Le nostre proposte" title="Prodotti in evidenza" text="Una selezione delle nostre specialità: scopri il catalogo completo per trovare il dolce giusto." />
          </Reveal>
          <div className="grid grid--4">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}><ProductCard product={p} /></Reveal>
            ))}
          </div>
          <Reveal className="center mt">
            <Link to="/prodotti" className="btn btn--outline">Vedi tutti i prodotti <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container split">
          <Reveal className="split__media">
            <img src={img('site/interno-pasticceria.png')} alt="Gli interni di Tortatelier e i loro dettagli a righe colorate" loading="lazy" width="1330" height="760" />
          </Reveal>
          <Reveal className="split__text" delay={120}>
            <SectionTitle align="left" eyebrow="Lavorazione artigianale" title="Il tempo giusto per ogni dolce" text="Crediamo che la pasticceria buona richieda tempo, attenzione e mani esperte. Ogni preparazione segue il suo ritmo." />
            <ul className="features">
              {craft.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="features__icon"><Icon size={22} aria-hidden="true" /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split__media split__media--tall">
            <img src={img('site/luca-e-carlo.jpg')} alt="Luca Gambelli e Carlo De Marco, i pasticceri di Tortatelier" loading="lazy" width="768" height="1024" />
          </Reveal>
          <Reveal className="split__text" delay={120}>
            <SectionTitle align="left" eyebrow="La nostra storia" title="Passione, tradizione e golosità" />
            <p className="lead">Tortatelier è la pasticceria artigianale di Luca Gambelli e Carlo De Marco, a Milano.</p>
            <p>Ogni creazione racconta il loro modo di fare pasticceria: cura dei dettagli, ricerca dell&rsquo;equilibrio e voglia di condividere qualcosa di buono.</p>
            <Link to="/chi-siamo" className="btn btn--outline">Scopri chi siamo <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Le nostre creazioni" title="Un assaggio con gli occhi" />
          </Reveal>
          <div className="mosaic">
            {gallery.slice(0, 6).map((g, i) => (
              <Reveal key={g.id} delay={i * 60} className="mosaic__item">
                <Link to="/creazioni" aria-label={`${g.caption} - vai alla galleria`}>
                  <img src={g.src} alt={g.alt} loading="lazy" width="800" height="600" />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="center mt">
            <Link to="/creazioni" className="btn btn--outline">Vai alla galleria <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="visit">
        <div className="container visit__inner">
          <Reveal>
            <span className="eyebrow eyebrow--light">Ti aspettiamo</span>
            <h2>Vieni a trovarci in pasticceria</h2>
            <p>Entra, scegli il tuo dolce preferito e lasciati consigliare. Per ordini speciali scrivici o chiamaci.</p>
            <div className="visit__actions">
              <Link to="/contatti" className="btn btn--gold"><MapPin size={16} aria-hidden="true" /> Orari e come raggiungerci</Link>
              <a href={`tel:${siteInfo.phoneLink}`} className="btn btn--ghost">Chiama ora</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
