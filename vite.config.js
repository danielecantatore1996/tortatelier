import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' permette di pubblicare su GitHub Pages in qualsiasi sotto-cartella (es. /nome-repo/)
export default defineConfig({
  base: './',
  plugins: [react()],
});
