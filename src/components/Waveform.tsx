import { useState, useEffect } from 'react';
import '../styles/waveform.css';

interface WaveformProps {
  isGenerating: boolean;
}

const Waveform = ({ isGenerating }: WaveformProps) => {
  const [bars, setBars] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Generate random waveform bars
    const newBars = Array.from({ length: 50 }, () => Math.random() * 100 + 20);
    setBars(newBars);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isGenerating) {
    return (
      <div className="waveform-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Generating your music...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="waveform-container">
      <h3 className="waveform-title">Your Composition</h3>
      
      <div className="waveform-display">
        {bars.map((height, index) => (
          <div
            key={index}
            className="waveform-bar"
            style={{
              height: `${isPlaying ? height * (0.5 + Math.sin(Date.now() / 100 + index) * 0.5) : height}%`,
              animationDelay: `${index * 0.05}s`,
            }}
          />
        ))}
      </div>

      <div className="audio-player">
        <div className="player-controls">
          <button className="play-button" onClick={handlePlayPause}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          
          <div className="time-display">
            {formatTime((progress / 100) * 180)} / 3:00
          </div>
          
          <button className="download-button">
            ⬇ Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Waveform;
