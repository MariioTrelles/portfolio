export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite'],
  },
  {
    title: 'Lenguajes',
    items: ['Java', 'Python', 'Rust', 'C++', 'C#'],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express',
      'Spring Boot',
      'Spring Sec',
      'Thymeleaf',
      'REST APIs',
      'SQL',
      'JPA',
      'MongoDB',
    ],
  },
  {
    title: 'Herramientas',
    items: [
      'GitHub',
      'Maven',
      'Postman',
      'Swagger',
      'JUnit',
      'Selenium',
      'Linux',
      'Docker',
      'Azure',
    ],
  },
];
