import { useEffect, useRef, useState } from 'react';
import ChapterMark from '../components/ChapterMark';
import ChapterSpread from '../components/ChapterSpread';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import TechBadge from '../components/TechBadge';
import { skillGroups, type SkillGroup } from '../data/skills';

const MARQUEE_SPEED = 55; // px por segundo, igual para todas las filas

type SkillRailProps = {
  group: SkillGroup;
  delay?: number;
  reverse?: boolean;
};

function SkillRail({ group, delay, reverse }: SkillRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(() => group.items.length * 2.2);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateDuration = () => {
      const setWidth = track.scrollWidth / 2;
      if (setWidth > 0) setDuration(setWidth / MARQUEE_SPEED);
    };

    updateDuration();

    const observer = new ResizeObserver(updateDuration);
    observer.observe(track);
    return () => observer.disconnect();
  }, [group.items]);

  return (
    <Reveal as="article" className="skill-group skill-rail-group" delay={delay}>
      <div className="skill-rail-header">
        <h3>{group.title}</h3>
      </div>

      <div className="skills-row-scroll">
        <span className="sr-only">{group.items.join(', ')}</span>
        <div
          ref={trackRef}
          className="skills-marquee-track"
          aria-hidden="true"
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          }}
        >
          {[...group.items, ...group.items].map((item, index) => (
            <TechBadge key={`${item}-${index}`} name={item} />
          ))}
        </div>
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
      stats={`+${Math.floor(totalSkills / 10) * 10} tecnologías`}
    />
  );

  const right = (
    <div className="skills-groups">
      {skillGroups.map((group, index) => (
        <SkillRail
          group={group}
          key={group.title}
          delay={Math.min(index * 0.06, 0.3)}
          reverse={index % 2 === 1}
        />
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
