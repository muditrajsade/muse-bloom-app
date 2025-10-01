import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Studio from '../components/Studio';
import About from '../components/About';
import Profile from '../components/Profile';
import '../styles/global.css';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      home: homeRef,
      studio: studioRef,
      about: aboutRef,
      profile: profileRef,
    };

    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, name: 'home' },
        { ref: studioRef, name: 'studio' },
        { ref: aboutRef, name: 'about' },
        { ref: profileRef, name: 'profile' },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      
      <div ref={homeRef}>
        <Hero onNavigate={scrollToSection} />
      </div>
      
      <div ref={studioRef}>
        <Studio />
      </div>
      
      <div ref={aboutRef}>
        <About />
      </div>
      
      <div ref={profileRef}>
        <Profile />
      </div>
    </div>
  );
};

export default Index;
