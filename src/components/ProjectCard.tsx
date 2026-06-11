type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  context: string;
  linkLabel?: string;
  linkHref?: string;
};

function ProjectCard({
  title,
  description,
  stack,
  context,
  linkLabel,
  linkHref,
}: ProjectCardProps) {
  return (
    <article className="project-card reveal">
      <div className="project-card-top">
        <span className="project-context">{context}</span>
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
    </article>
  );
}

export default ProjectCard;
