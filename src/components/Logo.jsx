import { Link } from 'react-router-dom';
import { siteInfo } from '../data/siteInfo';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`} aria-label={`${siteInfo.name} - Home`}>
      {siteInfo.logoImage ? (
        <img className="logo__image" src={siteInfo.logoImage} alt={siteInfo.name} />
      ) : (
        <>
          <span className="logo__mark" aria-hidden="true">T</span>
          <span className="logo__text">
            <span className="logo__name">{siteInfo.name}</span>
            <span className="logo__tag">{siteInfo.tagline}</span>
          </span>
        </>
      )}
    </Link>
  );
}
