import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Seo from './components/Seo';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import Torte from './pages/Torte';
import Catering from './pages/Catering';
import Natale from './pages/Natale';
import Contatti from './pages/Contatti';
import Privacy from './pages/Privacy';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <a href="#contenuto" className="skip-link" onClick={(e) => { e.preventDefault(); document.getElementById('contenuto')?.focus(); }}>Vai al contenuto</a>
      <Seo />
      <Header />
      <main id="contenuto" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/torte" element={<Torte />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/natale" element={<Natale />} />
          <Route path="/creazioni" element={<Navigate to="/torte/" replace />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton floating />
      <ScrollToTop />
    </>
  );
}
