type HeroProps = {
  name: string;
  role: string;
  summary: string;
  primaryLink: string;
  secondaryLink: string;
};

function Hero({ name, role, summary, primaryLink, secondaryLink }: HeroProps) {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Portfolio profesional</p>
          <h1>{name}</h1>
          <p className="hero-role">{role}</p>
          <p className="hero-summary">{summary}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={primaryLink}>
              Ver proyectos
            </a>
            <a
              className="button button-secondary"
              href={secondaryLink}
              target="_blank"
              rel="noreferrer"
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="hero-panel reveal reveal-delay">
          <div className="terminal-card" aria-label="Resumen técnico">
            <div className="terminal-top">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              <p>
                <span className="terminal-prompt">$</span> perfil --estado
              </p>
              <p>Estudiante finalizando Ingeniería Informática del Software</p>
              <p>
                <span className="terminal-prompt">$</span> intereses --listar
              </p>
              <p>software, web, bases de datos, Git, Docker, despliegue</p>
              <p>
                <span className="terminal-prompt">$</span> objetivo --actual
              </p>
              <p>Prácticas o primera experiencia profesional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
