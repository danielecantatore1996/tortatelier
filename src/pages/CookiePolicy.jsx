import PageHero from '../components/PageHero';

export default function CookiePolicy() {
  return (
    <>
      <PageHero eyebrow="Informativa" title="Cookie Policy" />
      <section className="section">
        <div className="container prose">
          <p><strong>Testo provvisorio.</strong> Fai verificare questa informativa da un professionista prima della pubblicazione.</p>
          <h2>Cosa sono i cookie</h2>
          <p>I cookie sono piccoli file di testo che i siti salvano sul dispositivo dell&rsquo;utente.</p>
          <h2>Cookie utilizzati da questo sito</h2>
          <p>Il sito non utilizza cookie di profilazione né di analisi. Contenuti di terze parti, come la mappa Google Maps nella pagina Contatti e i caratteri di Google Fonts, possono impostare propri cookie o raccogliere dati tecnici: consulta le rispettive informative.</p>
          <h2>Gestione dei cookie</h2>
          <p>Puoi cancellare o bloccare i cookie dalle impostazioni del tuo browser. Se aggiungerai strumenti di statistica o marketing, dovrai inserire un banner di consenso.</p>
        </div>
      </section>
    </>
  );
}
