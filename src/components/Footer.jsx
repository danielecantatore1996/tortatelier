import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { siteInfo, navLinks, mapsUrl } from '../data/siteInfo';
import '../styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>{siteInfo.description}</p>
          <div className="footer__social">
            <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (si apre in una nuova scheda)">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <nav aria-label="Collegamenti del sito">
          <h2 className="footer__title">Esplora</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Contatti</h2>
          <ul className="footer__contacts">
            <li><MapPin size={16} aria-hidden="true" /><a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`${siteInfo.address.street}, ${siteInfo.address.city} su Google Maps (si apre in una nuova scheda)`}>{siteInfo.address.street}<br />{siteInfo.address.city}</a></li>
            <li><Phone size={16} aria-hidden="true" /><a href={`tel:${siteInfo.phoneLink}`}>{siteInfo.phone}</a></li>
            <li><Mail size={16} aria-hidden="true" />{siteInfo.email ? <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a> : <span>Email da inserire</span>}</li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Orari</h2>
          <ul className="footer__hours">
            {siteInfo.hours.map((h) => (
              <li key={h.day}><span>{h.day}</span><span>{h.time}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__company">Dati societari: {siteInfo.legalName} · P.IVA e CF {siteInfo.vatAndFiscalCode}</p>
          <p>© {year} {siteInfo.name}. Tutti i diritti riservati.</p>
          <p className="footer__legal">
            <Link to="/privacy/">Privacy Policy</Link>
            <Link to="/cookie-policy/">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
