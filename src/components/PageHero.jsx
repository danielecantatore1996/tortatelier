export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <span className="ornament" aria-hidden="true"><i /></span>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
