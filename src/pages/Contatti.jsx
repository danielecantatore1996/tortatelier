import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Truck } from "lucide-react";
import PageHero from "../components/PageHero";
import WhatsAppButton from "../components/WhatsAppButton";
import { siteInfo, mapsUrl } from "../data/siteInfo";

const initial = {
  nome: "",
  email: "",
  telefono: "",
  messaggio: "",
  privacy: false,
};

function validate(v) {
  const e = {};
  if (v.nome.trim().length < 2) e.nome = "Inserisci il tuo nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Inserisci un indirizzo email valido.";
  if (v.telefono && !/^[+\d][\d\s().-]{5,}$/.test(v.telefono.trim()))
    e.telefono = "Inserisci un numero di telefono valido.";
  if (v.messaggio.trim().length < 10)
    e.messaggio = "Scrivi un messaggio di almeno 10 caratteri.";
  if (!v.privacy)
    e.privacy = "Devi accettare l\u2019informativa sulla privacy.";
  return e;
}

export default function Contatti() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const onChange = (ev) => {
    const { name, value, type, checked } = ev.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ type: "error", text: "Controlla i campi evidenziati." });
      document.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    if (!siteInfo.email) {
      setStatus({
        type: "error",
        text: "L'indirizzo email della pasticceria non è ancora configurato.",
      });
      return;
    }
    const body = [
      `Nome: ${values.nome.trim()}`,
      `Email: ${values.email.trim()}`,
      ...(values.telefono.trim()
        ? [`Telefono: ${values.telefono.trim()}`]
        : []),
      "",
      values.messaggio.trim(),
    ].join("\r\n");
    const subject = encodeURIComponent("Richiesta di informazioni");
    setStatus({
      type: "info",
      text: `Completa l'invio nel tuo programma email. Se non si apre, scrivici direttamente a ${siteInfo.email}.`,
    });
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const field = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `${name}-err` : undefined,
  });
  const err = (name) =>
    errors[name] && (
      <span className="field__error" id={`${name}-err`} role="alert">
        {errors[name]}
      </span>
    );

  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Vieni a trovarci"
        text={
          <>
            Per informazioni, ordini o preventivi su torte personalizzate puoi
            contattarci <strong>{siteInfo.email ? <a href={`mailto:${siteInfo.email}`}>via email</a> : "via email"}</strong>,{" "}
            <strong>tramite il modulo qui sotto</strong> o con un{" "}
            <strong>
              messaggio sulla nostra pagina{" "}
              <a
                href={siteInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </strong>
            .
          </>
        }
      />
      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <ul className="contact__list">
              <li>
                <MapPin aria-hidden="true" />
                <div>
                  <h3>Indirizzo</h3>
                  <p>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteInfo.address.street}, ${siteInfo.address.city} su Google Maps (si apre in una nuova scheda)`}
                    >
                      {siteInfo.address.street}
                      <br />
                      {siteInfo.address.city}
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <Phone aria-hidden="true" />
                <div>
                  <h3>Telefono</h3>
                  <p>
                    <a href={`tel:${siteInfo.phoneLink}`}>{siteInfo.phone}</a>
                  </p>
                </div>
              </li>
              <li>
                <Mail aria-hidden="true" />
                <div>
                  <h3>Email</h3>
                  <p>
                    {siteInfo.email ? (
                      <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
                    ) : (
                      "Email da inserire"
                    )}
                  </p>
                </div>
              </li>
              <li>
                <Clock aria-hidden="true" />
                <div>
                  <h3>Orari di apertura</h3>
                  <dl className="hours">
                    {siteInfo.hours.map((h) => (
                      <div key={h.day}>
                        <dt>{h.day}</dt>
                        <dd>{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            </ul>
            <div className="contact__actions">
              <WhatsAppButton />
              <a
                className="btn btn--dark"
                href={siteInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} aria-hidden="true" /> Seguici su Instagram
              </a>
            </div>
            <section className="delivery-info" aria-labelledby="delivery-info-title">
              <h2 id="delivery-info-title">
                <Truck size={22} aria-hidden="true" /> Informazioni sulle consegne
              </h2>
              <dl className="delivery-info__list">
                <div>
                  <dt>Consegna a domicilio</dt>
                  <dd>{siteInfo.delivery.home}</dd>
                </div>
                <div>
                  <dt>Consegna fuori Milano</dt>
                  <dd>{siteInfo.delivery.outsideMilan}</dd>
                </div>
              </dl>
            </section>
          </div>

          <form className="form" onSubmit={onSubmit} noValidate>
            <h2>Richiedi informazioni</h2>
            <p>Compila il modulo e inviaci uan richiesta via email</p>
            <div className="field">
              <label htmlFor="nome">Nome e cognome *</label>
              <input type="text" autoComplete="name" {...field("nome")} />
              {err("nome")}
            </div>
            <div className="field">
              <label htmlFor="email">Email *</label>
              <input type="email" autoComplete="email" {...field("email")} />
              {err("email")}
            </div>
            <div className="field">
              <label htmlFor="telefono">Telefono (facoltativo)</label>
              <input type="tel" autoComplete="tel" {...field("telefono")} />
              {err("telefono")}
            </div>
            <div className="field">
              <label htmlFor="messaggio">Messaggio *</label>
              <textarea rows="5" {...field("messaggio")} />
              {err("messaggio")}
            </div>
            <div className="field field--check">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={values.privacy}
                onChange={onChange}
                aria-invalid={errors.privacy ? "true" : undefined}
                aria-describedby={errors.privacy ? "privacy-err" : undefined}
              />
              <label htmlFor="privacy">
                Ho letto la <Link to="/privacy/">Privacy Policy</Link> e
                acconsento al trattamento dei dati. *
              </label>
            </div>
            {err("privacy")}
            <button type="submit" className="btn btn--dark">
              Apri email
            </button>
            <p
              className={`form__status form__status--${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.text}
            </p>
          </form>
        </div>
      </section>

      <section className="map" aria-label="Mappa">
        <iframe
          title="Mappa Google Maps della pasticceria"
          src={`https://www.google.com/maps?q=${encodeURIComponent(siteInfo.mapsQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
