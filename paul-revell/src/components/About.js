// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="portrait.png" alt="About Me" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I am Paul
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
