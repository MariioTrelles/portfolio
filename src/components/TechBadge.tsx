type TechBadgeProps = {
  name: string;
};

function getTechMark(name: string) {
  const marks: Record<string, string> = {
    Java: 'J',
    Python: 'Py',
    Rust: 'Rs',
    'C++': 'C++',
    'C#': 'C#',
    TypeScript: 'TS',
    JavaScript: 'JS',
    HTML: 'H',
    CSS: 'CSS',
    XML: 'XML',
    XSD: 'XSD',
    React: 'R',
    Vite: 'V',
    'Node.js': 'N',
    Express: 'Ex',
    'Spring Boot': 'SB',
    'Spring MVC': 'MVC',
    'Spring Security': 'Sec',
    Thymeleaf: 'Th',
    Docker: 'D',
    Git: 'Git',
    GitHub: 'GH',
    Maven: 'M',
    JPA: 'JPA',
    SQL: 'SQL',
  };

  return marks[name] ?? name.slice(0, 2);
}

function TechBadge({ name }: TechBadgeProps) {
  return (
    <div className="tech-badge">
      <span className="tech-badge-mark" aria-hidden="true">
        {getTechMark(name)}
      </span>
      <span>{name}</span>
    </div>
  );
}

export default TechBadge;
