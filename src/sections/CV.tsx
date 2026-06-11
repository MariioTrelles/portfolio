import SectionTitle from '../components/SectionTitle';

function CV() {
  return (
    <section className="section" id="cv">
      <div className="container">
        <SectionTitle
          eyebrow="CV"
          title="Currículum listo para compartir"
          description="He dejado preparado el enlace de descarga para que puedas sustituir el PDF definitivo cuando quieras."
        />

        <div className="cv-card reveal">
          <p>
            Puedes enlazar este portfolio desde GitHub, LinkedIn, tu currículum o
            candidaturas. El botón ya apunta provisionalmente al archivo indicado.
          </p>
          <a
            className="button button-primary"
            href="/cv/Mario_Trelles_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default CV;
