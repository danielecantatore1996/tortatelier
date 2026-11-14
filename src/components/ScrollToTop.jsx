import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

// Riporta in alto a ogni cambio pagina e mostra il pulsante "torna su"
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${show ? ' is-visible' : ''}`}
      aria-label="Torna all'inizio della pagina"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={20} />
    </button>
  );
}
