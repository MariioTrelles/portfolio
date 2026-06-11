import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data/personal';

function Contact() {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <SectionTitle
          eyebrow="Contacto"
          title="Disponible para prácticas y primera oportunidad profesional"
          description="Una forma clara de cerrar el portfolio: contacto directo, enlaces profesionales y llamada a la acción."
        />

        <div className="contact-card reveal">
          <p>
            Si quieres conocer mejor mis proyectos o valorar mi perfil para unas
            prácticas, estaré encantado de hablar contigo.
          </p>

          <div className="contact-links">
            <a className="button button-primary" href={`mailto:${personalInfo.email}`}>
              Contactar
            </a>
            <a className="button button-secondary" href={personalInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button button-secondary" href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
