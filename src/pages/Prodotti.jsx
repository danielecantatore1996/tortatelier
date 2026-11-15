import { Navigate, useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ProductGallery from '../components/ProductGallery';
import { categories, products } from '../data/products';

const productCategories = categories.filter((category) => category.id !== 'torte');
const catalogProducts = products.filter((product) => product.category !== 'torte');

export default function Prodotti() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get('categoria');
  const active = productCategories.some((category) => category.id === requestedCategory) ? requestedCategory : 'tutti';
  const list = active === 'tutti' ? catalogProducts : catalogProducts.filter((p) => p.category === active);
  const filters = [{ id: 'tutti', label: 'Tutti' }, ...productCategories];

  if (requestedCategory === 'torte') return <Navigate to="/torte" replace />;

  return (
    <>
      <PageHero eyebrow="Il nostro catalogo" title="I nostri prodotti" text="Dolci, salati e golosità preparati ogni giorno. Per ordini e informazioni contattaci." />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filtra i prodotti per categoria">
            {filters.map((f) => (
              <button key={f.id} type="button" className={`filters__btn${active === f.id ? ' is-active' : ''}`} aria-pressed={active === f.id} onClick={() => setSearchParams(f.id === 'tutti' ? {} : { categoria: f.id })}>
                {f.label}
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">{list.length} prodotti mostrati</p>
          <ProductGallery key={active} photos={list} />
          {list.length === 0 && <p className="center">Nessun prodotto in questa categoria.</p>}
        </div>
      </section>
    </>
  );
}
