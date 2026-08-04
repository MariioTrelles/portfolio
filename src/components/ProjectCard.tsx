import Reveal from './Reveal';

type ProjectCardProps = {
  title: string;
  subject?: string;
  description: string;
  stack: string[];
  linkLabel?: string;
  linkHref?: string;
  delay?: number;
};

function ProjectCard({
  title,
  subject,
  description,
  stack,
  linkLabel,
  linkHref,
  delay,
}: ProjectCardProps) {
  return (
    <Reveal as="article" className="project-card" delay={delay}>
      <div className="project-card-top">
        {subject ? <span className="project-subject">{subject}</span> : null}
        <h3>{title}</h3>
      </div>

      <p className="project-description">{description}</p>

      <div className="project-stack" aria-label={`Tecnologías usadas en ${title}`}>
        {stack.map((item) => (
          <span className="stack-pill" key={item}>
            {item}
          </span>
        ))}
      </div>

      {linkLabel && linkHref ? (
        <a className="project-link" href={linkHref} target="_blank" rel="noreferrer">
          {linkLabel}
        </a>
      ) : null}
    </Reveal>
  );
}

export default ProjectCard;
