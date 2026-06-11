import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data/personal';

function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container">
        <SectionTitle
          eyebrow="Sobre mí"
          title="Perfil técnico con base académica sólida"
          description="Un portfolio pensado para mostrar evolución, criterio técnico y capacidad para construir proyectos bien estructurados."
        />

        <div className="about-grid">
          <article className="info-card reveal">
            <p>
              Soy estudiante de <strong>Ingeniería Informática del Software</strong> en la{' '}
              <strong>Universidad de Oviedo</strong> y estoy terminando el grado.
            </p>
            <p>
              Me interesa especialmente el desarrollo software con buena estructura,
              el desarrollo web, las bases de datos, el control de versiones y los
              procesos de despliegue.
            </p>
          </article>

          <article className="info-card reveal reveal-delay">
            <ul className="detail-list">
              <li>
                <strong>Ubicación:</strong> {personalInfo.location}
              </li>
              <li>
                <strong>Objetivo:</strong> prácticas o primera experiencia laboral
              </li>
              <li>
                <strong>Enfoque:</strong> proyectos reales, aprendizaje constante y buenas prácticas
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
