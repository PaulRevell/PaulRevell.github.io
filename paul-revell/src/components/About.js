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
          I was a student enrolled at the University of St Andrews studying Computer Science and have graduated as of June 2024. I have 
          a strong interest in different kinds of technologies and developing software. I mostly use Java, 
          Python, C and React in both my own and my university projects and am keen on learning more 
          languages as required. In my free time, I like to develop video games and software ideas that I think 
          of. I am currently working on a few systems and games as side-projects.
          Skill-set: Full-stack, SCRUM, object-oriented design, algorithm design, data structures, problem 
          solving and complexity analysis, teamwork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
