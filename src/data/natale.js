import { photoAlt } from './photoAlt';

const images = import.meta.glob('../assets/natale/*.{jpeg,jpg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const christmasPhotos = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b, 'it', { numeric: true }))
  .map(([path, image], index) => ({
    id: path,
    image,
    alt: photoAlt(path, `Creazione natalizia di Tortatelier, foto ${index + 1}`),
  }));
