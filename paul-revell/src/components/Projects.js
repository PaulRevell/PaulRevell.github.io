// src/components/Projects.js
import React, { useState } from 'react';

import { FaGithub, FaCloudDownloadAlt } from 'react-icons/fa';
import { MdOutlineOpenInNew } from "react-icons/md";

const Projects = () => {
  // State to manage read more toggle
  const [isExpanded, setIsExpanded] = useState({});

  const fileHost = 'https://pub-43b3bb097b7d4e48adc0f8b8e18f2de3.r2.dev/';

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
      tag: "Source code for certain components is available on request.",
      download:`${fileHost}sync-pulse-report.zip`
    },
    {
      title: "PuzzleFlix",
      description: "An interactive puzzle-solving platform where you can play sudoku, multiple eights puzzles, and the eight queens puzzle. I also added the abiliy to create and upload your own puzzles. This was a group project at university and I took part in the majority of the site - both front and backend. Developed using SCRUM and agile development techniques.",
      image: "projects/puzzleflix.jpg",
      tag: "You can find the site here: https://puzzleflix.vanaj.io/",
      link:"https://puzzleflix.vanaj.io/",
      github:"https://github.com/vanajmoorthy/PuzzleFlix/tree/main"
    },
    {
      title: "Paul-Revell.com",
      description: "My personal portfolio website. This site was developed utilizing React, HTML, and CSS. The site is hosted via Github pages.",
      image: "projects/paul-revell.jpg",
      tag: "Currently in development",
      link:"https://www.paul-revell.com",
      github:"https://github.com/PaulRevell/PaulRevell.github.io/tree/main/"
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
                {isExpanded[index] ? project.tag : ""}
              </p>
              {project.description.length > 100 && (
                <div className="project-links">
                  <button onClick={() => toggleReadMore(index)}>
                    {isExpanded[index] ? "Read Less" : "Read More"}
                  </button>
                
                  {project.link ? 
                  <a className="project-icon" href={project.link} target="_blank" rel="noopener noreferrer">
                    <MdOutlineOpenInNew size={24} />
                  </a> : ""
                  }
                
                {project.github ? 
                  <a className="project-icon" href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                  </a> : ""
                }

                {project.download ?
                  <a className="project-icon" href={project.download} target="_blank" rel="noopener noreferrer">
                    <FaCloudDownloadAlt size={24} />
                  </a> : ""
                }

              </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
