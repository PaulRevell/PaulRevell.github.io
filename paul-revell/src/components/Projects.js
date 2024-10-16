import React, { useState } from 'react';

const Projects = () => {
  // State to manage read more toggle
  const [isExpanded, setIsExpanded] = useState({});

  const toggleReadMore = (index) => {
    setIsExpanded(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const projects = [
    {
      title: "SyncPulse: Tension Levels Synchronization in an Interactive Gaming Environment",
      description:
          `SyncPulse is a project that explores the synchronisation of in-game events
          with the tension levels of users in an interactive gaming environment, to
          assess the effectiveness of altering game events to raise or decrease tension
          based on a user’s physiological state. Developed in the Unity game engine,
          a horror game was developed that took in the participant’s heart rate for
          the in-game events to be synchronised to it, along with some events that
          remained consistent across all play-throughs. Some of these events include
          the player’s torch flickering, the playing of 3D ambient sounds and jump
          scares whenever the user is deemed to be not very tense. The tension levels
          were inferred via their recorded heart rates which provided a comprehensive
          understanding of the impact of the game on the user.`,
      image: "projects/syncpulse.jpg",
      link: "Source code for certain components is available on request."
    },
    {
      title: "PuzzleFlix",
      description: "An interactive puzzle-solving platform where you can play sudoku, multiple eights puzzles, and the eight queens puzzle. I also added the abiliy to create and upload your own puzzles. This was a group project at university and I took part in the majority of the site - both front and backend. Developed using SCRUM and agile development techniques.",
      image: "projects/puzzleflix.jpg",
      link: "You can find the site here: https://puzzleflix.vanaj.io/"
    },
    {
      title: "Paul-Revell.com",
      description: "The personal portfolio website. This site was developed utilizing React, HTML, and CSS. The site is hosted via Github pages.",
      image: "projects/paul-revell.jpg",
      link: "Currently in development"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-header">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>
                {isExpanded[index] ? project.description : `${project.description.slice(0, 100)}...`}
              </p>
              <p>
                {isExpanded[index] ? project.link : ""}
              </p>
              {project.description.length > 100 && (
                <button onClick={() => toggleReadMore(index)}>
                  {isExpanded[index] ? "Read Less" : "Read More"}
                </button>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
