import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { siteInfo } from "../data/siteInfo";

const revysOrigin = "https://revys.io";
const widgetUrl = `${revysOrigin}/w/3TceVpE77TBL`;

export default function GoogleReviews() {
  const [height, setHeight] = useState(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const onMessage = (event) => {
      if (
        event.origin !== revysOrigin ||
        event.source !== frameRef.current?.contentWindow ||
        event.data?.type !== "revys:resize"
      )
        return;
      const newHeight = Number(event.data.height);
      if (Number.isFinite(newHeight) && newHeight > 0) setHeight(newHeight);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section className="section reviews-section" aria-label="Recensioni dei clienti">
      <div className="container">
        <SectionTitle
          eyebrow="Le vostre parole"
          title="Non lo diciamo noi, lo dice il vostro palato!"
          as="h2"
        />
        <iframe
          ref={frameRef}
          className="reviews-widget"
          src={widgetUrl}
          title="Recensioni Google dei clienti di Tortatelier"
          loading="lazy"
          sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
          style={height === null ? undefined : { height: `${height}px` }}
        />
        <p className="center reviews-link">
          <a
            className="btn btn--dark"
            href={siteInfo.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leggi tutte le recensioni (si apre in una nuova scheda)"
          >
            Leggi tutte le recensioni
          </a>
        </p>
      </div>
    </section>
  );
}
