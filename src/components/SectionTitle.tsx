type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default SectionTitle;
