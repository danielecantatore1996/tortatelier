import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PhotoLightbox({ photos, initialIndex, onClose, returnFocus }) {
  const [index, setIndex] = useState(initialIndex);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') setIndex((i) => (i + 1) % photos.length);
      if (event.key === 'ArrowLeft') setIndex((i) => (i - 1 + photos.length) % photos.length);
      if (event.key === 'Tab') {
        const buttons = dialogRef.current.querySelectorAll('button');
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      returnFocus.current?.focus();
    };
  }, [onClose, photos.length, returnFocus]);

  const photo = photos[index];

  return (
    <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ingrandita" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <button ref={closeRef} type="button" className="lightbox__close" aria-label="Chiudi" onClick={onClose}><X size={26} aria-hidden="true" /></button>
      <button type="button" className="lightbox__nav lightbox__nav--prev" aria-label="Foto precedente" onClick={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}><ChevronLeft size={30} aria-hidden="true" /></button>
      <figure>
        <img src={photo.src} alt={photo.alt} />
        <figcaption aria-live="polite">{photo.caption && `${photo.caption} · `}{index + 1}/{photos.length}</figcaption>
      </figure>
      <button type="button" className="lightbox__nav lightbox__nav--next" aria-label="Foto successiva" onClick={() => setIndex((i) => (i + 1) % photos.length)}><ChevronRight size={30} aria-hidden="true" /></button>
    </div>
  );
}
