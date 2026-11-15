import { useCallback, useRef, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import PageHero from '../components/PageHero';
import PhotoLightbox from '../components/PhotoLightbox';
import { gallery } from '../data/gallery';

export default function Creazioni() {
  const [index, setIndex] = useState(null);
  const lastFocus = useRef(null);
  const close = useCallback(() => setIndex(null), []);

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

      {index !== null && <PhotoLightbox photos={gallery} initialIndex={index} onClose={close} returnFocus={lastFocus} />}
    </>
  );
}
