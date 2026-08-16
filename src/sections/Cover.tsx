import ChapterMark from '../components/ChapterMark';
import ChapterSpread from '../components/ChapterSpread';
import ContactRow from '../components/ContactRow';
import ProfilePanel from '../components/ProfilePanel';
import Reveal from '../components/Reveal';
import { personalInfo } from '../data/personal';

type CoverProps = {
  chapterIndex: number;
  name: string;
  role: string;
  summary: string;
  secondaryLink: string;
  onViewProjects: () => void;
};

function Cover({ chapterIndex, name, role, summary, secondaryLink, onViewProjects }: CoverProps) {
  const left = (
    <>
      <ProfilePanel name={name} caption={personalInfo.location} />

      <Reveal delay={0.15}>
        <ContactRow
          github={personalInfo.github}
          linkedin={personalInfo.linkedin}
          email={personalInfo.email}
        />
      </Reveal>
    </>
  );

  const right = (
    <>
      <Reveal className="hero-copy">
        <h1 className="profile-caption-name">{name}</h1>
        <p className="profile-caption-role">{role}</p>
        <p className="hero-summary">{summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={secondaryLink} target="_blank" rel="noreferrer">
            Descargar CV
          </a>
          <button type="button" className="button button-secondary" onClick={onViewProjects}>
            Ver proyectos
          </button>
        </div>
      </Reveal>

      <Reveal as="article" className="info-card" delay={0.15}>
        <ul className="detail-list">
          <li>
            <strong>Objetivo:</strong> prácticas o primera experiencia laboral
          </li>
          <li>
            <strong>Enfoque:</strong> proyectos reales, aprendizaje constante y buenas prácticas
          </li>
        </ul>
      </Reveal>
    </>
  );

  return (
    <section className="section chapter" id="inicio">
      <ChapterMark index={chapterIndex} label="Presentación" />
      <ChapterSpread left={left} right={right} leftClassName="chapter-spread-half--center" />
    </section>
  );
}

export default Cover;
