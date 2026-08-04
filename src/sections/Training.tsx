import ChapterMark from '../components/ChapterMark';
import ChapterSpread from '../components/ChapterSpread';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { trainingItems } from '../data/training';

type TrainingProps = {
  chapterIndex: number;
};

function Training({ chapterIndex }: TrainingProps) {
  const left = <SectionTitle title="Cursos y certificaciones" />;

  const right = (
    <div className="chapter-list">
      {trainingItems.map((item, index) => {
        const certificateLink = item.linkHref
          ? `${import.meta.env.BASE_URL}${item.linkHref}`
          : undefined;

        return (
          <Reveal
            as="article"
            className="training-card info-card"
            key={item.title}
            delay={Math.min(index * 0.1, 0.3)}
          >
            <span className="project-subject">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.linkLabel && certificateLink ? (
              <a className="project-link" href={certificateLink} target="_blank" rel="noreferrer">
                {item.linkLabel}
              </a>
            ) : null}
          </Reveal>
        );
      })}
    </div>
  );

  return (
    <section className="section chapter" id="formacion">
      <ChapterMark index={chapterIndex} label="Información extra" />
      <ChapterSpread left={left} right={right} leftClassName="chapter-spread-half--center" />
    </section>
  );
}

export default Training;
