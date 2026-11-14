import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Errore 404" title="Pagina non trovata" text="La pagina che cerchi non esiste o è stata spostata." />
      <section className="section center"><Link to="/" className="btn btn--gold">Torna alla home</Link></section>
    </>
  );
}
