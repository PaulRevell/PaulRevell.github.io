import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <h1>Paul Revell</h1>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Menu Links */}
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-pages">
          <ul>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <a href="https://github.com/PaulRevell" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a href="mailto:contact@paul-revell.com" className="email-button">
                <FaEnvelope size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
