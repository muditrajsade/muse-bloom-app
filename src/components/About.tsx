import '../styles/about.css';

const About = () => {
  const features = [
    {
      icon: '🎵',
      title: 'AI-Powered',
      description: 'Advanced neural networks analyze your input to create unique compositions',
    },
    {
      icon: '⚡',
      title: 'Instant Generation',
      description: 'Get your custom music in seconds, not hours',
    },
    {
      icon: '🎨',
      title: 'Mood-Based',
      description: 'Describe your feelings and watch them transform into sound',
    },
    {
      icon: '🔄',
      title: 'Unlimited Iterations',
      description: 'Generate as many variations as you need to find the perfect track',
    },
    {
      icon: '📥',
      title: 'High Quality',
      description: 'Export professional-grade audio files ready for any project',
    },
    {
      icon: '🎹',
      title: 'Multiple Genres',
      description: 'From classical to electronic, create music in any style',
    },
  ];

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About Our AI Music Composer</h1>
        </div>

        <div className="about-content">
          <p className="about-text">
            Our AI Music Composer uses cutting-edge artificial intelligence to transform your
            emotions and ideas into beautiful, original music. Whether you're a content creator,
            game developer, or just someone who loves music, our platform makes it easy to create
            custom soundtracks that perfectly match your vision.
          </p>

          <p className="about-text">
            Simply describe the mood or style you're looking for, adjust the parameters, and let
            our AI do the rest. No musical training required – just your imagination and our
            technology working together to create something amazing.
          </p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
