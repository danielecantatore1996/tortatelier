import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seo } from '../data/siteInfo';

// Aggiorna titolo e meta description per ogni pagina
export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const data = seo[pathname] || seo['/'];
    document.title = data.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = data.description;
  }, [pathname]);
  return null;
}
