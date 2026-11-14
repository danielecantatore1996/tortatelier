import { useState } from 'react';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

export default function Prodotti() {
  const [active, setActive] = useState('tutti');
  const list = active === 'tutti' ? products : products.filter((p) => p.category === active);
  const filters = [{ id: 'tutti', label: 'Tutti' }, ...categories];

  return (
    <>
      <PageHero eyebrow="Il nostro catalogo" title="I nostri prodotti" text="Dolci, salati e golosità preparati ogni giorno. Per ordini e informazioni contattaci." />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filtra i prodotti per categoria">
            {filters.map((f) => (
              <button key={f.id} type="button" className={`filters__btn${active === f.id ? ' is-active' : ''}`} aria-pressed={active === f.id} onClick={() => setActive(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">{list.length} prodotti mostrati</p>
          <div className="grid grid--3" key={active}>
            {list.map((p, i) => (
              <div className="fade-in" style={{ animationDelay: `${i * 50}ms` }} key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          {list.length === 0 && <p className="center">Nessun prodotto in questa categoria.</p>}
        </div>
      </section>
    </>
  );
}
