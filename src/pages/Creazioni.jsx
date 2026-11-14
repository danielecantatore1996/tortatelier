import { useCallback, useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import PageHero from '../components/PageHero';
import { gallery } from '../data/gallery';

export default function Creazioni() {
  const [index, setIndex] = useState(null);
  const lastFocus = useRef(null);
  const closeRef = useRef(null);
  const open = index !== null;

  const close = useCallback(() => {
    setIndex(null);
    lastFocus.current?.focus();
  }, []);
  const next = useCallback(() => setIndex((i) => (i + 1) % gallery.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + gallery.length) % gallery.length), []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Tab') {
        // il focus resta dentro la finestra ingrandita
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close, next, prev]);

  const item = open ? gallery[index] : null;

  return (
    <>
      <PageHero eyebrow="Galleria" title="Le nostre creazioni" text="Torte decorate, dolci e piccole opere di pasticceria. Clicca su una foto per ingrandirla." />
      <section className="section">
        <div className="container">
          <ul className="gallery">
            {gallery.map((g, i) => (
              <li key={g.id} className={`gallery__item gallery__item--${g.ratio}`}>
                <button
                  type="button"
                  aria-label={`Ingrandisci: ${g.alt}`}
                  onClick={(e) => { lastFocus.current = e.currentTarget; setIndex(i); }}
                >
                  <img src={g.src} alt={g.alt} loading="lazy" width="800" height="600" />
                  <span className="gallery__overlay"><ZoomIn size={26} aria-hidden="true" /><span>{g.caption}</span></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {item && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ingrandita" onClick={close}>
          <button ref={closeRef} type="button" className="lightbox__close" aria-label="Chiudi" onClick={close}><X size={26} /></button>
          <button type="button" className="lightbox__nav lightbox__nav--prev" aria-label="Foto precedente" onClick={(e) => { e.stopPropagation(); prev(); }}><ChevronLeft size={30} /></button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={item.src} alt={item.alt} />
            <figcaption>{item.caption} · {index + 1}/{gallery.length}</figcaption>
          </figure>
          <button type="button" className="lightbox__nav lightbox__nav--next" aria-label="Foto successiva" onClick={(e) => { e.stopPropagation(); next(); }}><ChevronRight size={30} /></button>
        </div>
      )}
    </>
  );
}
