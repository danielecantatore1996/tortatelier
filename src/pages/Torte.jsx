import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import ProductGallery from '../components/ProductGallery';
import { products } from '../data/products';

const cakes = products.filter((product) => product.category === 'torte');

export default function Torte() {
  return (
    <>
      <PageHero eyebrow="Le nostre creazioni" title="Torte personalizzate a Milano" text="Realizziamo artigianalmente torte su ordinazione, dando forma alle vostre idee per compleanni e occasioni speciali." />
      <section className="section">
        <div className="container">
          <div className="center gallery-actions">
            <Link to="/contatti/" className="btn btn--dark">Contattaci per la tua torta <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <ProductGallery photos={cakes} />
          {cakes.length === 0 && <p className="center">Nessuna foto disponibile.</p>}
        </div>
      </section>
    </>
  );
}
