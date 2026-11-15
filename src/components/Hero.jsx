import { Link } from "react-router-dom";
import { siteInfo, img } from "../data/siteInfo";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero__bg"
        src={img("site/torta-gialla.png")}
        alt=""
        fetchpriority="high"
      />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="eyebrow eyebrow--light">
          {siteInfo.name} · {siteInfo.tagline} · Bakery lab
        </span>
        <h1 id="hero-title">L' arte di creare momenti indimenticabili.</h1>
        <p>
          {siteInfo.description}
          <br />
          Ci troviamo nel cuore di Porta Garibaldi a Milano, vienici a trovare!
        </p>
        <Link to="/prodotti/" className="btn btn--dark">
          Scopri i nostri prodotti
        </Link>
      </div>
    </section>
  );
}
