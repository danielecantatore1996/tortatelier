import { useCallback, useRef, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import PhotoLightbox from './PhotoLightbox';

export default function ProductGallery({ photos }) {
  const [index, setIndex] = useState(null);
  const lastFocus = useRef(null);
  const close = useCallback(() => setIndex(null), []);

  return (
    <>
      <div className="product-gallery">
        {photos.map((photo, i) => (
          <button type="button" className="product-gallery__item" key={photo.id} aria-label={`Ingrandisci: ${photo.alt}`} onClick={(event) => { lastFocus.current = event.currentTarget; setIndex(i); }}>
            <img src={photo.image} alt={photo.alt} loading="lazy" decoding="async" width="800" height="600" />
            <span className="product-gallery__overlay" aria-hidden="true"><ZoomIn size={26} /></span>
          </button>
        ))}
      </div>
      {index !== null && <PhotoLightbox photos={photos.map((photo) => ({ ...photo, src: photo.image }))} initialIndex={index} onClose={close} returnFocus={lastFocus} />}
    </>
  );
}
