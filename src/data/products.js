import { photoAlt } from './photoAlt';

export const categories = [
  { id: 'biscotteria', label: 'Biscotteria', alt: 'Biscotteria artigianale' },
  { id: 'colazione', label: 'Colazione', alt: 'Dolci per la colazione' },
  { id: 'pasticceria', label: 'Pasticceria', alt: 'Pasticceria artigianale' },
  { id: 'torte', label: 'Torte', alt: 'Torta artigianale' },
];

const images = import.meta.glob('../assets/product-gallery/*/*.{jpeg,jpg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const products = categories.flatMap((category) =>
  Object.entries(images)
    .filter(([path]) => path.includes(`/product-gallery/${category.id}/`))
    .sort(([a], [b]) => a.localeCompare(b, 'it', { numeric: true }))
    .map(([path, image], index) => ({
      id: path,
      category: category.id,
      image,
      alt: photoAlt(path, `${category.alt} di Tortatelier, foto ${index + 1}`),
    }))
);

export const featuredProducts = categories.map((category) => ({
  ...products.find((product) => product.category === category.id),
  name: category.label,
}));
