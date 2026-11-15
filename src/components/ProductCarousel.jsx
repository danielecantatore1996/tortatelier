import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCarousel({ photos }) {
  const [selection] = useState(() => {
    const shuffled = [...photos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 8);
  });
  const trackRef = useRef(null);

  if (selection.length === 0) return null;

  const scroll = (direction) => {
    const track = trackRef.current;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'auto' });
  };

  return (
    <div className="product-carousel" role="region" aria-label="Foto dei nostri prodotti">
      <ul ref={trackRef} className="product-carousel__track" tabIndex={0} aria-label="Scorri le foto dei prodotti">
        {selection.map((photo) => (
          <li key={photo.id}>
            <Link to={`/prodotti?categoria=${photo.category}`} aria-label={`Scopri ${photo.alt}`}>
              <img src={photo.image} alt={photo.alt} loading="lazy" decoding="async" width="800" height="600" />
            </Link>
          </li>
        ))}
      </ul>
      {selection.length > 1 && (
        <div className="product-carousel__controls">
          <button type="button" onClick={() => scroll(-1)} aria-label="Scorri alle foto precedenti"><ChevronLeft size={22} aria-hidden="true" /></button>
          <button type="button" onClick={() => scroll(1)} aria-label="Scorri alle foto successive"><ChevronRight size={22} aria-hidden="true" /></button>
        </div>
      )}
    </div>
  );
}
