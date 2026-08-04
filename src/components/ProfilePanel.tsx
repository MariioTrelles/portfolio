import Reveal from './Reveal';

type ProfilePanelProps = {
  name: string;
  role: string;
};

function ProfilePanel({ name, role }: ProfilePanelProps) {
  const profileImage = `${import.meta.env.BASE_URL}images/nocheColiseo1.jpg`;

  return (
    <Reveal className="profile-panel">
      <div className="profile-card">
        <div className="profile-window-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="profile-image-wrap">
          <img src={profileImage} alt={name} />
          <div className="profile-overlay">
            <p>{name}</p>
            <span>{role}</span>
          </div>
        </div>
      </div>

      <div className="profile-caption">
        <h1 className="profile-caption-name">{name}</h1>
        <p className="profile-caption-role">{role}</p>
      </div>
    </Reveal>
  );
}

export default ProfilePanel;
