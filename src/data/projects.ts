export type Project = {
  title: string;
  description: string;
  stack: string[];
  context: string;
  linkLabel?: string;
  linkHref?: string;
};

export const universityProjects: Project[] = [
  {
    title: 'Java/JDBC Layered App',
    description:
      'Proyecto académico construido con arquitectura por capas para separar dominio, persistencia y lógica de aplicación. Incluye acceso a base de datos con JDBC, consultas SQL y gestión del proyecto con Maven y Git.',
    stack: ['Java', 'JDBC', 'SQL', 'Maven', 'Git'],
    context: 'Proyecto universitario',
  },
  {
    title: 'Servlets/JSP Web App',
    description:
      'Aplicación web académica orientada a comprender el ciclo de petición-respuesta en Java web, uso de sesiones, JSTL y organización bajo patrón MVC con vistas JSP y controladores basados en Servlets.',
    stack: ['Java', 'Servlets', 'JSP', 'JSTL', 'MVC'],
    context: 'Proyecto universitario',
  },
  {
    title: 'Docker/Azure Deployment Project',
    description:
      'Trabajo enfocado en contenedores, configuración de servicios y despliegue básico. Sirvió para entender entornos reproducibles, nociones de cloud y fundamentos prácticos de entrega de aplicaciones.',
    stack: ['Docker', 'Azure', 'Linux', 'Deployment', 'Networking'],
    context: 'Proyecto universitario',
  },
  {
    title: 'Database Design Project',
    description:
      'Proyecto centrado en modelado relacional y persistencia, con definición de esquemas, consultas SQL y exploración de soluciones NoSQL para comparar enfoques de almacenamiento y acceso a datos.',
    stack: ['SQL', 'MongoDB', 'Data Modeling', 'Normalization', 'Persistence'],
    context: 'Proyecto universitario',
  },
];

export const personalProjects: Project[] = [
  {
    title: 'Personal Portfolio',
    description:
      'Este portfolio personal diseñado para presentar mi perfil, mis proyectos y mi orientación profesional de forma clara, moderna y fácil de compartir en GitHub, LinkedIn y candidaturas.',
    stack: ['React', 'Vite', 'TypeScript', 'CSS', 'GitHub Pages'],
    context: 'Proyecto personal',
    linkLabel: 'Ver sección',
    linkHref: '#inicio',
  },
];
