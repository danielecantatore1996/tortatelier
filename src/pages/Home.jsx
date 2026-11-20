import { Link } from 'react-router-dom';
import { ArrowRight, Snowflake } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import GoogleReviews from '../components/GoogleReviews';
import { products } from '../data/products';
import christmasImage from '../assets/natale/006-panettone-su-una-confezione-natalizia-davanti-a-un-albero.jpeg';
import cateringImage from '../assets/catering/004-tavolo-catering-con-bicchieri-e-personale.jpeg';
import '../styles/home.css';

const cakePhotos = products.filter((product) => product.category === 'torte').slice(0, 6);

export default function Home() {
  return (
    <>
      <Hero />

      <div className="home-content">
      <section className="section home-christmas">
        <div className="container home-christmas__inner">
          <Reveal className="home-christmas__text">
            <span className="eyebrow"><Snowflake size={16} aria-hidden="true" /> La magia delle feste</span>
            <h2>Il Natale di Tortatelier</h2>
            <p>Le nostre specialità natalizie sono disponibili in negozio e su ordinazione. Sfoglia il catalogo di Natale per scoprire di più.</p>
            <Link to="/natale/" className="btn home-christmas__button">Scopri il Natale <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
          <Reveal className="home-christmas__media" delay={120}>
            <img src={christmasImage} alt="Panettone su una confezione natalizia davanti all'albero di Natale" loading="lazy" decoding="async" width="1024" height="1024" />
          </Reveal>
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
                <Link to="/torte/" aria-label={`${g.alt} - vai alle torte`}>
                  <img src={g.image} alt={g.alt} loading="lazy" width="800" height="600" />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="center mt">
            <Link to="/torte/" className="btn btn--dark">Scopri le nostre torte <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section home-catering">
        <div className="container home-catering__inner">
          <Reveal className="home-catering__text">
            <SectionTitle align="left" eyebrow="I vostri eventi" title="Catering" />
            <p>Per i vostri eventi organizziamo catering con proposte artigianali dolci e salate, bevande e servizio di camerieri.</p>
            <Link to="/catering/" className="btn btn--dark">Scopri il catering <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
          <Reveal className="home-catering__media" delay={120}>
            <img src={cateringImage} alt="Tavolo catering con bicchieri e personale" loading="lazy" decoding="async" width="1024" height="1024" />
          </Reveal>
        </div>
      </section>

      <GoogleReviews />
      </div>
    </>
  );
}
