type HeroProps = {
  name: string;
  role: string;
  summary: string;
  secondaryLink: string;
};

function Hero({ name, role, summary, secondaryLink }: HeroProps) {
  const profileImage = `${import.meta.env.BASE_URL}images/nocheColiseo1.jpg`;

  return (
    <section className="hero section" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Software developer</p>
          <h1>{name}</h1>
          <p className="hero-role">{role}</p>
          <p className="hero-summary">{summary}</p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={secondaryLink}
              target="_blank"
              rel="noreferrer"
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="hero-panel reveal reveal-delay">
          <div className="profile-card">
            <div className="profile-window-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="profile-image-wrap">
              <img src={profileImage} alt={name} />
              <div className="profile-overlay">
                <p>{name}</p>
                <span>{role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
