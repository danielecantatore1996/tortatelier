export function photoAlt(path, fallback) {
  const filename = path.split('/').pop();
  const match = filename.match(/^\d{3,}-(.+)\.(?:jpe?g|webp)$/i);
  if (!match) return fallback;

  const description = match[1].replace(/-/g, ' ');
  return description.charAt(0).toUpperCase() + description.slice(1);
}
