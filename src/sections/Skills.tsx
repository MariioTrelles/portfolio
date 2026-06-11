import SectionTitle from '../components/SectionTitle';
import TechBadge from '../components/TechBadge';
import { skillGroups } from '../data/skills';

function Skills() {
  return (
    <section className="section" id="tecnologias">
      <div className="container">
        <SectionTitle
          eyebrow="Tecnologías"
          title="Herramientas con las que estoy construyendo mi perfil"
          description="Tecnologías y conceptos que ya he trabajado durante el grado y que quiero seguir consolidando en un entorno profesional."
        />

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <article className="skill-group reveal" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-grid">
                {group.items.map((item) => (
                  <TechBadge key={item} name={item} category={group.title} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
