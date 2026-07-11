export type Project = {
  title: string;
  subject?: string;
  description: string;
  stack: string[];
  linkLabel?: string;
  linkHref?: string;
};

export const universityProjects: Project[] = [
  {
    title: 'Yovi - Game Y at UniOvi',
    subject: 'Arquitectura del Software',
    description:
      'Proyecto universitario desarrollado en equipo de 5 personas. Aplicación con arquitectura por servicios, frontend en React, backend Node/Express, motor de juego en Rust, Docker, tests y despliegue/documentación asociados.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Rust', 'Docker'],
    linkLabel: 'Ver repositorio',
    linkHref: 'https://github.com/Arquisoft/yovi_es5c',
  },
  {
    title: 'BookSpace - Spring Reservation System',
    subject: 'Sistemas Distribuidos e Internet',
    description:
      'Aplicación web desarrollada en equipo con Spring Boot para gestionar espacios y reservas. Incluye autenticación, roles, entidades JPA, repositorios, servicios, vistas Thymeleaf, validación, internacionalización y tests.',
    stack: ['Java', 'Spring Boot', 'JPA', 'Thymeleaf', 'Security', 'Maven'],
    linkLabel: 'Ver repositorio',
    linkHref: 'https://github.com/MariioTrelles/sdi-bookspace-spring',
  },
  {
    title: 'CPM Pizzeria',
    subject: 'Comunicación Persona Máquina',
    description:
      'Proyecto individual de escritorio desarrollado en Java Swing para gestionar pedidos de una pizzería. Incluye carta por categorías, carrito, reservas, confirmación de pedidos, persistencia en ficheros y un minijuego integrado.',
    stack: ['Java', 'Swing', 'JavaHelp', 'POO', 'Ficheros'],
    linkLabel: 'Ver repositorio',
    linkHref: 'https://github.com/MariioTrelles/cpm-pizzeria-java',
  },
  {
    title: 'MotoGP-Desktop',
    subject: 'Software y Estándares para la Web',
    description:
      'Proyecto individual centrado en desarrollo web frontend, maquetación responsive, validación de estándares web y trabajo con contenidos estructurados dentro de la asignatura de Software y Estándares para la Web.',
    stack: ['HTML', 'CSS', 'JavaScript', 'XML', 'XSD'],
    linkLabel: 'Ver repositorio',
    linkHref: 'https://github.com/MariioTrelles/sew-web',
  },
];

export const personalProjects: Project[] = [
  {
    title: 'Próximamente',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Esta sección queda reservada para futuros proyectos personales.',
    stack: ['Pendiente'],
  },
];
