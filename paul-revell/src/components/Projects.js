import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-header">Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>SyncPulse</h3>
          <p>A horror game that syncronises in-game events to the user's heart-rate.</p>
        </div>
        <div className="project-item">
          <h3>PuzzleFlix</h3>
          <p>An interactive puzzle-solving platform where users can solve puzzles. This was a group project at university and can be found here: https://puzzleflix.vanaj.io/</p>
        </div>
        <div className="project-item">
          <h3>Dungeon Diver</h3>
          <p>A video game group project. The source code can be found on github</p>
        </div>
        <div className="project-item">
          <h3>Paul-Revell.com</h3>
          <p>The personal portfolio website showcasing my work, skills, and experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
