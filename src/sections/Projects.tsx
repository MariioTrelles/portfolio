import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import type { Project } from '../data/projects';

type ProjectsProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  projects: Project[];
};

function Projects({ id, eyebrow, title, intro, projects }: ProjectsProps) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <SectionTitle eyebrow={eyebrow} title={title} description={intro} />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
