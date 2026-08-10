import type { IconType } from 'react-icons';
import {
  SiApachemaven,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJunit5,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiRust,
  SiSelenium,
  SiSharp,
  SiSpringboot,
  SiSpringsecurity,
  SiSwagger,
  SiThymeleaf,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { DiCss3, DiJava } from 'react-icons/di';
import { TbApi, TbBrandAzure, TbCode, TbDatabase } from 'react-icons/tb';

export type TechIcon = {
  icon: IconType;
  color: string;
};

const FALLBACK: TechIcon = { icon: TbCode, color: '#ffd27a' };

const techIconMap: Record<string, TechIcon> = {
  // Frontend
  HTML: { icon: SiHtml5, color: '#e34f26' },
  CSS: { icon: DiCss3, color: '#2965ba' },
  JavaScript: { icon: SiJavascript, color: '#f7df1e' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  React: { icon: SiReact, color: '#61dafb' },
  Vite: { icon: SiVite, color: '#8b6cff' },

  // Backend
  Java: { icon: DiJava, color: '#f89820' },
  Python: { icon: SiPython, color: '#4B8BBE' },
  Rust: { icon: SiRust, color: '#e4e4e4' },
  'C++': { icon: SiCplusplus, color: '#00599c' },
  'C#': { icon: SiSharp, color: '#3ba143' },
  'Node.js': { icon: SiNodedotjs, color: '#5fa04e' },
  Express: { icon: SiExpress, color: '#e4e4e4' },
  'Spring Boot': { icon: SiSpringboot, color: '#6db33f' },
  'Spring Sec': { icon: SiSpringsecurity, color: '#6db33f' },
  Thymeleaf: { icon: SiThymeleaf, color: '#3ea16e' },
  'REST APIs': { icon: TbApi, color: '#ffad32' },
  SQL: { icon: TbDatabase, color: '#ffad32' },
  JPA: { icon: TbDatabase, color: '#ffad32' },
  MongoDB: { icon: SiMongodb, color: '#47a248' },

  // Herramientas
  GitHub: { icon: SiGithub, color: '#e4e4e4' },
  Maven: { icon: SiApachemaven, color: '#c71a36' },
  Postman: { icon: SiPostman, color: '#ff6c37' },
  Swagger: { icon: SiSwagger, color: '#85ea2d' },
  JUnit: { icon: SiJunit5, color: '#25a162' },
  Selenium: { icon: SiSelenium, color: '#43b02a' },
  Linux: { icon: SiLinux, color: '#fcc624' },
  Docker: { icon: SiDocker, color: '#2496ed' },
  Azure: { icon: TbBrandAzure, color: '#0078d4' },
};

export function getTechIcon(name: string): TechIcon {
  return techIconMap[name] ?? FALLBACK;
}
