import Reveal from './Reveal';

type SectionTitleProps = {
  title: string;
  description?: string;
};

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Reveal className="section-heading">
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </Reveal>
  );
}

export default SectionTitle;
