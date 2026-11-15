import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';
import './styles/pages.css';

if (window.location.hash.startsWith('#/') && !window.location.hash.startsWith('#//')) {
  const legacyUrl = new URL(window.location.hash.slice(1), window.location.origin);
  if (legacyUrl.origin === window.location.origin) {
    const path = legacyUrl.pathname === '/' ? '/' : `${legacyUrl.pathname.replace(/\/+$/, '')}/`;
    window.history.replaceState(null, '', `${path}${legacyUrl.search}${legacyUrl.hash}`);
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
