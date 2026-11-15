import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import ProductGallery from '../components/ProductGallery';
import { cateringPhotos } from '../data/catering';

export default function Catering() {
  return (
    <>
      <PageHero eyebrow="I vostri eventi" title="Catering" text="Organizziamo catering professionali per i vostri eventi, con proposte dolci e salate artigianali, bevande alcoliche e analcoliche e servizio di camerieri. Ogni dettaglio è pensato per rendere speciale la vostra occasione." />
      <section className="section">
        <div className="container">
          <div className="center gallery-actions">
            <Link to="/contatti" className="btn btn--dark">Parlaci del tuo evento <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <ProductGallery photos={cateringPhotos} />
          {cateringPhotos.length === 0 && <p className="center">Nessuna foto disponibile.</p>}
        </div>
      </section>
    </>
  );
}
