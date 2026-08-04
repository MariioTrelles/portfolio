import { useMemo } from 'react';
import BookmarkRail from './components/BookmarkRail';
import ChapterNav from './components/ChapterNav';
import PageDeck from './components/PageDeck';
import Cover from './sections/Cover';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Training from './sections/Training';
import usePager from './hooks/usePager';
import { personalInfo } from './data/personal';
import { personalProjects, universityProjects } from './data/projects';

const CHAPTER_META = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'projects-university', label: 'Proyectos universitarios' },
  { id: 'projects', label: 'Proyectos personales' },
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
          />
        ),
      },
      { id: 'tecnologias', node: <Skills chapterIndex={2} /> },
      {
        id: 'projects-university',
        node: (
          <Projects
            chapterIndex={3}
            id="projects-university"
            chapterLabel="Proyectos universitarios"
            title="Proyectos universitarios"
            intro="Una selección de trabajos que reflejan una base sólida en ingeniería del software, desarrollo web, datos y despliegue."
            projects={universityProjects}
          />
        ),
      },
      {
        id: 'projects',
        node: (
          <Projects
            chapterIndex={4}
            id="projects"
            chapterLabel="Proyectos personales"
            title="Proyectos personales"
            intro="Pequeños proyectos orientados a seguir aprendiendo, construir presencia profesional y aplicar buenas prácticas fuera del aula."
            projects={personalProjects}
          />
        ),
      },
      { id: 'formacion', node: <Training chapterIndex={5} /> },
    ],
    [cvPath],
  );

  return (
    <div className="app-shell">
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
      <BookmarkRail items={CHAPTER_META} activeIndex={pager.activeIndex} onSelect={pager.goTo} />
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
