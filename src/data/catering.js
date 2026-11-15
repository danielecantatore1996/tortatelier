const images = import.meta.glob('../assets/catering/*.{jpeg,jpg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const cateringPhotos = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b, 'it', { numeric: true }))
  .map(([path, image], index) => ({
    id: path,
    image,
    alt: `Catering di Tortatelier, foto ${index + 1}`,
  }));
