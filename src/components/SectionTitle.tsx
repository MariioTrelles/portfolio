import Reveal from './Reveal';

type SectionTitleProps = {
  index?: number;
  title: string;
  description?: string;
  stats?: string;
};

function SectionTitle({ index, title, description, stats }: SectionTitleProps) {
  return (
    <Reveal className="section-heading">
      {index ? (
        <span className="section-heading-index" aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
      ) : null}
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
      {stats ? <p className="section-stats">{stats}</p> : null}
    </Reveal>
  );
}

export default SectionTitle;
