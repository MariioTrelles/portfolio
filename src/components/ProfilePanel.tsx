import Reveal from './Reveal';

type ProfilePanelProps = {
  name: string;
  caption: string;
};

function ProfilePanel({ name, caption }: ProfilePanelProps) {
  const profileImage = `${import.meta.env.BASE_URL}images/nocheColiseo1.jpg`;

  return (
    <Reveal className="profile-panel">
      <figure className="profile-plate">
        <div className="profile-card">
          <div className="profile-image-wrap">
            <img src={profileImage} alt={name} />
          </div>
        </div>

        <figcaption className="profile-plate-caption">
          <span className="profile-plate-label">{caption}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default ProfilePanel;
