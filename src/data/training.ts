export type Training = {
  title: string;
  category: string;
  description: string;
  linkLabel?: string;
  linkHref?: string;
};

export const trainingItems: Training[] = [
  {
    title: 'IA Generativa para la Mejora de la Productividad',
    category: 'Curso oficial',
    description:
      'Formación orientada al uso práctico de herramientas de IA generativa para mejorar productividad, documentación, análisis y flujos de trabajo.',
    linkLabel: 'Ver certificado',
    linkHref: 'cv/certificadoIA.pdf',
  },
  {
    title: 'B2 Certificate in English',
    category: 'Cambridge English',
    description:
      'Certificado oficial de Cambridge que acredita un nivel B2 de inglés, cubriendo comprensión oral y escrita, expresión y uso del idioma en contextos académicos y profesionales.',
    linkLabel: 'Ver certificado',
    linkHref: 'cv/B2-Certificate-Cambridge-English.pdf',
  },
];
