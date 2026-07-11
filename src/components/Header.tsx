const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Proyectos universitarios', href: '#projects-university' },
  { label: 'Proyectos personales', href: '#projects' },
  { label: 'Formación', href: '#formacion' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">MT</span>
          <span>Mario Trelles</span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
