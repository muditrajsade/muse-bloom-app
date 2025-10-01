import { useState, useEffect } from 'react';
import '../styles/navbar.css';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">AI Music Composer</div>
      <ul className="navbar-menu">
        <li>
          <a
            className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={`navbar-link ${activeSection === 'studio' ? 'active' : ''}`}
            onClick={() => onNavigate('studio')}
          >
            Studio
          </a>
        </li>
        <li>
          <a
            className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => onNavigate('about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            className={`navbar-link ${activeSection === 'profile' ? 'active' : ''}`}
            onClick={() => onNavigate('profile')}
          >
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
