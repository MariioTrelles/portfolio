export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Lenguajes y desarrollo',
    items: ['Java', 'Python', 'Rust', 'C++', 'C#', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'XML', 'XSD'],
  },
  {
    title: 'Web y arquitectura',
    items: ['React', 'Vite', 'Node.js', 'Express', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Thymeleaf', 'Servlets', 'JSP', 'JSTL', 'MVC', 'REST APIs', 'Arquitectura por capas'],
  },
  {
    title: 'Datos y persistencia',
    items: ['SQL', 'JDBC', 'JPA', 'HSQLDB', 'Bases de datos relacionales', 'MongoDB', 'NoSQL', 'Persistencia en ficheros'],
  },
  {
    title: 'Entorno y flujo de trabajo',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Maven', 'Java Swing', 'JavaHelp', 'Postman', 'Swagger / OpenAPI'],
  },
  {
    title: 'Testing',
    items: ['JUnit', 'Selenium', 'Pruebas unitarias', 'Pruebas de integración'],
  },
  {
    title: 'Sistemas y despliegue',
    items: ['Linux', 'Docker', 'Docker Compose', 'Apache Tomcat', 'Azure básico'],
  },
];
