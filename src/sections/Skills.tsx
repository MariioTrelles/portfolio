import { useRef } from 'react';
import ChapterMark from '../components/ChapterMark';
import ChapterSpread from '../components/ChapterSpread';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import TechBadge from '../components/TechBadge';
import { skillGroups, type SkillGroup } from '../data/skills';

type SkillRailProps = {
  group: SkillGroup;
  delay?: number;
};

function SkillRail({ group, delay }: SkillRailProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: -1 | 1) => {
    railRef.current?.scrollBy({
      left: direction * 260,
      behavior: 'smooth',
    });
  };

  return (
    <Reveal as="article" className="skill-group skill-rail-group" delay={delay}>
      <div className="skill-rail-header">
        <h3>{group.title}</h3>
        <div className="skill-rail-controls" aria-label={`Controles de ${group.title}`}>
          <button
            type="button"
            aria-label={`Ver tecnologías anteriores de ${group.title}`}
            onClick={() => scrollRail(-1)}
          >
            &lt;
          </button>
          <button
            type="button"
            aria-label={`Ver más tecnologías de ${group.title}`}
            onClick={() => scrollRail(1)}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="skills-row-scroll" ref={railRef} aria-label={group.title}>
        {group.items.map((item) => (
          <TechBadge key={item} name={item} />
        ))}
      </div>
    </Reveal>
  );
}

type SkillsProps = {
  chapterIndex: number;
};

function Skills({ chapterIndex }: SkillsProps) {
  const totalSkills = skillGroups.reduce((count, group) => count + group.items.length, 0);

  const left = (
    <SectionTitle
      index={chapterIndex}
      title="Tecnologías y herramientas"
      description="Tecnologías y conceptos que ya he trabajado durante el grado y que quiero seguir consolidando en un entorno profesional. Abarcan desde el lenguaje y la arquitectura hasta el testing y el despliegue, con especial interés en las buenas prácticas."
      stats={`+50 tecnologías`}
    />
  );

  const right = (
    <div className="skills-groups">
      {skillGroups.map((group, index) => (
        <SkillRail group={group} key={group.title} delay={Math.min(index * 0.06, 0.3)} />
      ))}
    </div>
  );

  return (
    <section className="section chapter" id="tecnologias">
      <ChapterMark index={chapterIndex} label="Habilidades y tecnologías" />
      <ChapterSpread left={left} right={right} leftClassName="chapter-spread-half--center" />
    </section>
  );
}

export default Skills;
