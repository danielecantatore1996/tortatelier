import { Link } from 'react-router-dom';
import { ArrowRight, Snowflake } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import GoogleReviews from '../components/GoogleReviews';
import { featuredProducts, products } from '../data/products';
import { christmasPhotos } from '../data/natale';
import { img } from '../data/siteInfo';
import '../styles/home.css';

const cakePhotos = products.filter((product) => product.category === 'torte').slice(0, 6);

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Le nostre proposte" title="Prodotti in evidenza" text="Una selezione delle nostre specialità: scopri il catalogo completo per trovare il dolce giusto." />
          </Reveal>
          <div className="grid grid--4">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <Link className="product-card__link" to={p.category === 'torte' ? '/torte' : `/prodotti?categoria=${p.category}`} aria-label={`Scopri ${p.name}`}><ProductCard product={p} /></Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="center mt">
            <Link to="/prodotti" className="btn btn--outline">Vedi tutti i prodotti <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section home-christmas">
        <div className="container home-christmas__inner">
          <Reveal className="home-christmas__text">
            <span className="eyebrow"><Snowflake size={16} aria-hidden="true" /> La magia delle feste</span>
            <h2>Il Natale di Tortatelier</h2>
            <p>Scopri le nostre specialità artigianali per le feste, disponibili in negozio e su ordinazione, e sfoglia il catalogo di Natale.</p>
            <Link to="/natale" className="btn home-christmas__button">Scopri il Natale <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
          {christmasPhotos[0] && (
            <Reveal className="home-christmas__media" delay={120}>
              <img src={christmasPhotos[0].image} alt={christmasPhotos[0].alt} loading="lazy" decoding="async" />
            </Reveal>
          )}
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Torte personalizzate" title="Un assaggio con gli occhi" />
          </Reveal>
          <div className="mosaic">
            {cakePhotos.map((g, i) => (
              <Reveal key={g.id} delay={i * 60} className="mosaic__item">
                <Link to="/torte" aria-label={`${g.alt} - vai alle torte`}>
                  <img src={g.image} alt={g.alt} loading="lazy" width="800" height="600" />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="center mt">
            <Link to="/torte" className="btn btn--outline">Scopri le nostre torte <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section home-story">
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

      <GoogleReviews />
    </>
  );
}
