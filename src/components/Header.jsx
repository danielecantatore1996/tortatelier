import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../data/siteInfo';
import '../styles/header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${open ? ' header--open' : ''}`}>
      <div className="container header__inner">
        <Logo />
        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        <nav id="main-nav" className="nav" aria-label="Navigazione principale">
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
