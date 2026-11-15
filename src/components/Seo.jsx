import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMetadata } from '../data/siteInfo';

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const data = getPageMetadata(pathname);
    if (!data) return;
    document.title = data.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = data.description;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = data.url;
    for (const [property, content] of Object.entries(data.openGraph)) {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    }
  }, [pathname]);
  return null;
}
