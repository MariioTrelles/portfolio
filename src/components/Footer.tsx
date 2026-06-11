import { personalInfo } from '../data/personal';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <p className="footer-name">{personalInfo.name}</p>
          <p className="footer-copy">
            Portfolio desarrollado con React, Vite y TypeScript.
          </p>
        </div>

        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
