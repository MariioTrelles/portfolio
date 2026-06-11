export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Lenguajes y desarrollo',
    items: ['Java', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Web y arquitectura',
    items: ['React', 'Vite', 'Servlets', 'JSP', 'JSTL', 'MVC', 'Arquitectura por capas'],
  },
  {
    title: 'Datos y persistencia',
    items: ['JDBC', 'Bases de datos relacionales', 'MongoDB', 'Modelado de datos'],
  },
  {
    title: 'Herramientas y prácticas',
    items: ['Git', 'GitHub', 'Docker', 'Maven', 'Despliegue', 'Buenas prácticas'],
  },
];
