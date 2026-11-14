export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={product.image} alt={product.alt || product.name} loading="lazy" width="800" height="600" />
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </article>
  );
}
