import { useState } from 'react';
import '../styles/studio.css';
import Waveform from './Waveform';

const Studio = () => {
  const [mood, setMood] = useState('');
  const [duration, setDuration] = useState(60);
  const [tempo, setTempo] = useState(120);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = () => {
    if (!mood.trim()) {
      alert('Please describe your mood or style first!');
      return;
    }

    setIsGenerating(true);
    setHasGenerated(false);

    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 2000);
  };

  return (
    <section className="studio">
      <div className="studio-container">
        <div className="studio-header">
          <h1 className="studio-title">Music Studio</h1>
          <p className="studio-subtitle">
            Describe your mood and let AI create the perfect soundtrack
          </p>
        </div>

        <div className="studio-card">
          <div className="form-group">
            <label className="form-label">Mood or Style</label>
            <textarea
              className="form-input form-textarea"
              placeholder="e.g., upbeat and energetic, calm and peaceful, mysterious and dark..."
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            />
          </div>

          <div className="slider-container">
            <label className="form-label">Duration: {duration}s</label>
            <div className="slider-wrapper">
              <input
                type="range"
                min="30"
                max="180"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="slider"
              />
              <span className="slider-value">{duration}s</span>
            </div>
          </div>

          <div className="slider-container">
            <label className="form-label">Tempo: {tempo} BPM</label>
            <div className="slider-wrapper">
              <input
                type="range"
                min="60"
                max="180"
                value={tempo}
                onChange={(e) => setTempo(Number(e.target.value))}
                className="slider"
              />
              <span className="slider-value">{tempo}</span>
            </div>
          </div>

          <button
            className="generate-button"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? 'Generating...' : 'Generate Music'}
          </button>

          {(hasGenerated || isGenerating) && (
            <Waveform isGenerating={isGenerating} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Studio;
