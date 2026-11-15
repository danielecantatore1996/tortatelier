import { Link } from 'react-router-dom';
import { ArrowRight, FileDown, Snowflake, Sparkles, TreePine } from 'lucide-react';
import PageHero from '../components/PageHero';
import ProductGallery from '../components/ProductGallery';
import { christmasPhotos } from '../data/natale';
import '../styles/natale.css';

export default function Natale() {
  return (
    <div className="christmas">
      <div className="christmas__hero">
        <PageHero eyebrow="La magia delle feste" title="Il Natale di Tortatelier" text="Per Natale abbiamo creato specialità artigianali da condividere e regalare, disponibili in negozio e su ordinazione. Lasciati conquistare dalla dolcezza delle feste." />
        <div className="christmas__decor" aria-hidden="true">
          <Snowflake className="christmas__snowflake" />
          <TreePine className="christmas__tree" />
          <Sparkles className="christmas__sparkles" />
        </div>
      </div>
      <section className="section christmas__gallery">
        <div className="container">
          <div className="christmas__intro">
            <Sparkles size={24} aria-hidden="true" />
            <h2>Le nostre idee per le feste</h2>
            <p>Scopri le nostre creazioni natalizie e scegli la tua preferita.</p>
            <Link to="/contatti" className="btn christmas__button">Contattaci per ordinare <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="christmas__catalog">
            <div>
              <h2>Catalogo Natale 2026</h2>
              <p>Scarica il catalogo in formato PDF e scopri le nostre proposte per le feste. Per informazioni e ordinazioni, contattaci.</p>
            </div>
            <a href={`${import.meta.env.BASE_URL}catalogo-natale-2026.pdf`} download="Catalogo_Natale_2026_TortAtelier.pdf" className="btn christmas__catalog-button">
              <FileDown size={18} aria-hidden="true" /> Scarica il catalogo PDF
            </a>
          </div>
          <ProductGallery photos={christmasPhotos} />
          {christmasPhotos.length === 0 && <p className="center">Nessuna foto disponibile.</p>}
        </div>
      </section>
    </div>
  );
}
