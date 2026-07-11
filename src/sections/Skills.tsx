import { useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import TechBadge from '../components/TechBadge';
import { skillGroups, type SkillGroup } from '../data/skills';

type SkillRailProps = {
  group: SkillGroup;
};

function SkillRail({ group }: SkillRailProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: -1 | 1) => {
    railRef.current?.scrollBy({
      left: direction * 260,
      behavior: 'smooth',
    });
  };

  return (
    <article className="skill-group skill-rail-group reveal">
      <div className="skill-rail-header">
        <h3>{group.title}</h3>
        <div className="skill-rail-controls" aria-label={`Controles de ${group.title}`}>
          <button type="button" aria-label={`Ver tecnologías anteriores de ${group.title}`} onClick={() => scrollRail(-1)}>
            &lt;
          </button>
          <button type="button" aria-label={`Ver más tecnologías de ${group.title}`} onClick={() => scrollRail(1)}>
            &gt;
          </button>
        </div>
      </div>

      <div className="skills-row-scroll" ref={railRef} aria-label={group.title}>
        {group.items.map((item) => (
          <TechBadge key={item} name={item} />
        ))}
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section className="section" id="tecnologias">
      <div className="container">
        <SectionTitle
          eyebrow="Tecnologías"
          title="Tecnologías y herramientas"
          description="Tecnologías y conceptos que ya he trabajado durante el grado y que quiero seguir consolidando en un entorno profesional."
        />

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <SkillRail group={group} key={group.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
