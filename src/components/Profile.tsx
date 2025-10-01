import '../styles/profile.css';

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-avatar">🎵</div>
          <h2 className="profile-name">Music Creator</h2>
          <p className="profile-email">creator@aimusic.app</p>

          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-value">47</div>
              <div className="stat-label">Tracks Created</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">2.5h</div>
              <div className="stat-label">Total Duration</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">12</div>
              <div className="stat-label">Genres Explored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
