type TechBadgeProps = {
  name: string;
  category: string;
};

function TechBadge({ name, category }: TechBadgeProps) {
  return (
    <div className="tech-badge">
      <span>{name}</span>
      <small>{category}</small>
    </div>
  );
}

export default TechBadge;
