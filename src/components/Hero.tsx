import '../styles/hero.css';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Turn your moods into melodies</h1>
        <p className="hero-subtitle">
          Create unique, AI-generated music tailored to your emotions and preferences.
          Transform your feelings into beautiful compositions with just a few words.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => onNavigate('studio')}>
            Start Creating
          </button>
          <button className="btn-secondary" onClick={() => onNavigate('about')}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
