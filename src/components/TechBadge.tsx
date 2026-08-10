import type { CSSProperties } from 'react';
import { getTechIcon } from '../data/techIcons';

type TechBadgeProps = {
  name: string;
};

function TechBadge({ name }: TechBadgeProps) {
  const { icon: Icon, color } = getTechIcon(name);

  return (
    <div className="tech-badge" style={{ '--tech-color': color } as CSSProperties}>
      <span className="tech-badge-icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="tech-badge-name">{name}</span>
    </div>
  );
}

export default TechBadge;
