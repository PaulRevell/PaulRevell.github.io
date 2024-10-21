// src/components/Navbar.js
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { MdDarkMode, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = ({ isLightMode, toggleMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dark mode
  const handleToggle = (e) => {
    e.preventDefault();
    toggleMode();
  };

  // Hamburger
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

        {/* Icons with text for mobile view */}
        <div className="nav-links">
          <ul>
            <li>
              <a href="https://github.com/PaulRevell" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} /><span className="icon-text">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/paul-revell-29940223a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} /><span className="icon-text">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:contact@paul-revell.com" className="email-button">
                <FaEnvelope size={24} /><span className="icon-text">Email</span>
              </a>
            </li>
            <li className="theme-toggle">
              <a href="#" className="theme-toggle" onClick={handleToggle}>
                {isLightMode ? (
                  <MdOutlineDarkMode size={24} />
                ) : (
                  <MdOutlineLightMode size={24} />
                )}
                <span className="icon-text">{isLightMode ? 'Dark Mode' : 'Light Mode'}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
