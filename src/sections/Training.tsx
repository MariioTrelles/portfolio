import SectionTitle from '../components/SectionTitle';

function Training() {
  const certificatePath = `${import.meta.env.BASE_URL}cv/certificadoIA.pdf`;

  return (
    <section className="section" id="formacion">
      <div className="container">
        <SectionTitle
          eyebrow="Formación complementaria"
          title="Cursos y certificaciones"
        />

        <article className="training-card info-card reveal">
          <span className="project-subject">Curso oficial</span>
          <h3>IA Generativa para la Mejora de la Productividad</h3>
          <p>
            Formación orientada al uso práctico de herramientas de IA generativa para
            mejorar productividad, documentación, análisis y flujos de trabajo.
          </p>
          <a className="project-link" href={certificatePath} target="_blank" rel="noreferrer">
            Ver certificado
          </a>
        </article>
      </div>
    </section>
  );
}

export default Training;
