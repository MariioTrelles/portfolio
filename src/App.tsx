import { useMemo } from 'react';
import BookmarkRail from './components/BookmarkRail';
import ChapterNav from './components/ChapterNav';
import PageDeck from './components/PageDeck';
import SocialLinks from './components/SocialLinks';
import Cover from './sections/Cover';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Training from './sections/Training';
import usePager from './hooks/usePager';
import { personalInfo } from './data/personal';
import { universityProjects } from './data/projects';

const CHAPTER_META = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'formacion', label: 'Formación' },
] as const;

const CHAPTER_IDS = CHAPTER_META.map((chapter) => chapter.id);

function App() {
  const cvPath = `${import.meta.env.BASE_URL}cv/CV_Mario_Trelles.pdf`;
  const pager = usePager(CHAPTER_IDS);

  const chapters = useMemo(
    () => [
      {
        id: 'inicio',
        node: (
          <Cover
            chapterIndex={1}
            name={personalInfo.name}
            role={personalInfo.role}
            summary={personalInfo.summary}
            secondaryLink={cvPath}
            onViewProjects={() => pager.goTo(CHAPTER_IDS.indexOf('projects'))}
          />
        ),
      },
      { id: 'tecnologias', node: <Skills chapterIndex={2} /> },
      {
        id: 'projects',
        node: (
          <Projects
            chapterIndex={3}
            id="projects"
            chapterLabel="Proyectos"
            title="Proyectos"
            intro="Una selección de trabajos que reflejan una base sólida en ingeniería del software, desarrollo web, datos y despliegue. Incluyen tanto desarrollos en equipo como proyectos individuales a lo largo del grado."
            stats="4 proyectos · individuales y en equipo"
            projects={universityProjects}
          />
        ),
      },
      { id: 'formacion', node: <Training chapterIndex={4} /> },
    ],
    [cvPath, pager.goTo],
  );

  return (
    <div className="app-shell">
      <div className="top-left-nav">
        <a
          className="brand-mark brand-mark-corner"
          href={`#${CHAPTER_IDS[0]}`}
          aria-label="Ir al inicio"
          onClick={(event) => {
            event.preventDefault();
            pager.goTo(0);
          }}
        >
          MT
        </a>
        <BookmarkRail items={CHAPTER_META} activeIndex={pager.activeIndex} onSelect={pager.goTo} />
      </div>
      <SocialLinks github={personalInfo.github} linkedin={personalInfo.linkedin} cvHref={cvPath} />
      <main>
        <PageDeck
          chapters={chapters}
          activeIndex={pager.activeIndex}
          direction={pager.direction}
          next={pager.next}
          prev={pager.prev}
          onExitComplete={pager.onTransitionEnd}
        />
      </main>
      <ChapterNav
        activeIndex={pager.activeIndex}
        count={chapters.length}
        onPrev={pager.prev}
        onNext={pager.next}
      />
    </div>
  );
}

export default App;
