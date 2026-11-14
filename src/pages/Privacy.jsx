import PageHero from '../components/PageHero';
import { siteInfo } from '../data/siteInfo';

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Informativa" title="Privacy Policy" />
      <section className="section">
        <div className="container prose">
          <p><strong>Testo provvisorio.</strong> Fai redigere o verificare questa informativa da un professionista prima della pubblicazione.</p>
          <h2>Titolare del trattamento</h2>
          <p>{siteInfo.name} — {siteInfo.address.street}, {siteInfo.address.city} — {siteInfo.email || 'email da inserire'}</p>
          <h2>Dati raccolti</h2>
          <p>Attraverso il modulo contatti raccogliamo nome, email, telefono (facoltativo) e il contenuto del messaggio, al solo scopo di rispondere alla tua richiesta.</p>
          <h2>Base giuridica e conservazione</h2>
          <p>Il trattamento si basa sul tuo consenso e sull&rsquo;esecuzione di richieste precontrattuali. I dati sono conservati per il tempo necessario a gestire la richiesta.</p>
          <h2>I tuoi diritti</h2>
          <p>Puoi chiedere accesso, rettifica, cancellazione e limitazione dei dati scrivendo a {siteInfo.email || 'email da inserire'}, e proporre reclamo al Garante per la protezione dei dati personali.</p>
        </div>
      </section>
    </>
  );
}
