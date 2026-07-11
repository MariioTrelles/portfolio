import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Training from './sections/Training';
import { personalInfo } from './data/personal';
import { personalProjects, universityProjects } from './data/projects';

function App() {
  const cvPath = `${import.meta.env.BASE_URL}cv/CV_Mario_Trelles.pdf`;

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero
          name={personalInfo.name}
          role={personalInfo.role}
          summary={personalInfo.summary}
          secondaryLink={cvPath}
        />
        <About />
        <Skills />
        <Projects
          id="projects-university"
          eyebrow="Experiencia académica"
          title="Proyectos universitarios"
          intro="Una selección de trabajos que reflejan una base sólida en ingeniería del software, desarrollo web, datos y despliegue."
          projects={universityProjects}
        />
        <Projects
          id="projects"
          eyebrow="Iniciativa personal"
          title="Proyectos personales"
          intro="Pequeños proyectos orientados a seguir aprendiendo, construir presencia profesional y aplicar buenas prácticas fuera del aula."
          projects={personalProjects}
        />
        <Training />
      </main>
      <Footer />
    </div>
  );
}

export default App;
