import ChapterMark from '../components/ChapterMark';
import ChapterSpread from '../components/ChapterSpread';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import type { Project } from '../data/projects';

type ProjectsProps = {
  chapterIndex: number;
  id: string;
  chapterLabel: string;
  title: string;
  intro: string;
  projects: Project[];
};

function Projects({ chapterIndex, id, chapterLabel, title, intro, projects }: ProjectsProps) {
  const left = <SectionTitle title={title} description={intro} />;

  const right = (
    <div className="chapter-list">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} {...project} delay={Math.min(index * 0.08, 0.32)} />
      ))}
    </div>
  );

  return (
    <section className="section chapter" id={id}>
      <ChapterMark index={chapterIndex} label={chapterLabel} />
      <ChapterSpread left={left} right={right} leftClassName="chapter-spread-half--center" />
    </section>
  );
}

export default Projects;
