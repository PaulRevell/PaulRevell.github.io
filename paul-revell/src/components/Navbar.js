// src/components/Navbar.js
import React from 'react';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  // remember add smooth scrolling
  return (

    <nav className="nav-bar">

      <div className="nav-logo">

        <h1>Paul Revell</h1>

      </div>

      <div className="nav-pages">

        <ul>
          {/* <li><a href="#home">Home</a></li> */}
          <li><a href="#about">About</a></li>
          <li><a href="#about">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>

      <div className="nav-links">
        <ul>
          <li>
            <a href="https://github.com/PaulRevell" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} /> {/* GitHub Icon */}
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} /> {/* LinkedIn Icon */}
            </a>
          </li>
          <li>
            <a href="mailto:paul@paul-revell.com" className="email-button">
              <FaEnvelope size={24} /> {/* Email Icon */}
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
