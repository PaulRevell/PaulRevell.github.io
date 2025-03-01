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
            I'm currently working as a Data Analyst and have recently graduated with a Computer Science degree from The University of St Andrews (2024). I have 
            a strong interest in different kinds of technologies and developing both software and games. I primarily use Java, 
            Python, C, C#, and React which I have used in both personal and university projects and am keen on learning more languages as required.
            In my spare time, I love to develop many different genres of video games and working on new software ideas.
            <br/><br/>
            In my current role as a Data Analyst, I build queries to support and justify data-driven decisions throughout different teams in the company. I also create
            various data visualisations in Tableau and MATLAB and Excel that are accessible and useful to team members in various roles.
            <br/><br/>
            Skill-set: Full-stack, Tableau, SCRUM, object-oriented design, algorithm design, data structures, problem solving and complexity analysis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
