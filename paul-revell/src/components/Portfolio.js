// src/components/Portfolio.js
import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import PortfolioGrid from './PortfolioGrid';

import {
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa';


const fileHost = 'https://pub-43b3bb097b7d4e48adc0f8b8e18f2de3.r2.dev/';

const workExperience = [
  {
    title: "Data Analyst",
    image: "projects/tda.webp",
    tagline: 'Tesco (2024 - Present)',
  },
  {
    title: "Software Enginner",
    image: "projects/paul-revell.webp",
    tagline: 'Freelance (2020 - Present)',
  },
  {
    title: "BSc Computer Science",
    image: "projects/standrews.webp",
    tagline: 'St Andrews Class of 2024'
  }
]

const portfolioItems = [
  
  {
    title: "Heart Beats - Find your musical soulmate",
    description: "Full-stack application recommending music and connecting users based on listening patterns. Implemented Spotify API integration and custom matching algorithms (on-going)",
    image: "projects/hb.webp",
    img: 'projects/hb-full.webp',
    link:"https://github.com/PaulRevell/HeartBeats",
    linktext:"Github Client",
    github:"https://github.com/PaulRevell/HeartBeatsServer",
    tags: ['React.js','JavaScript','Node.js', 'Express.js', 'Spotify API'],
  },
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
      image: "projects/syncpulse.webp",
      img: "projects/sync.webp",
      download:`${fileHost}sync-pulse-report.zip`,
      tags: ['Unity','C#','Java','Python'],
  },
  {
    title: "Composer Jin",
    description: "Artist Portfolio Website (Freelance)",
    image: "projects/jin.webp",
    img: 'projects/jinf.webp',
    link:"https://composer-jin.com/",
    github:"https://github.com/composerjin/composerjin.github.io",
    linktext:"View Online",
    tags: ['React.js','JavaScript','CSS'],
  },
  {
    title: "PuzzleFlix",
    description: "An interactive puzzle-solving platform where you can play sudoku, multiple eights puzzles, and the eight queens puzzle. I also added the abiliy to create and upload your own puzzles. This was a group project at university and I took part in the majority of the site - both front and backend. Developed using SCRUM and agile development techniques.",
    image: "projects/puzzleflix.webp",
    img: 'projects/puzzleweb.webp',
    link:"https://puzzleflix.vanaj.io/",
    github:"https://github.com/vanajmoorthy/PuzzleFlix/tree/main",
    linktext:"View Online",
    tags: ['React.js','JavaScript','SQL','Scrum'],
  },
  {
    title: "Paul-Revell.com",
    description: "My personal portfolio website. This site was developed utilizing React, HTML, and CSS. The site is hosted via Github pages.",
    image: "projects/paul-revell.webp",
    link:"https://www.paul-revell.com",
    linktext:"View Online",
    github:"https://github.com/PaulRevell/PaulRevell.github.io/tree/main/"
  }
];

const Portfolio = ({ modalKey }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (modalKey) {
      const item = portfolioItems.find(i => i.id === modalKey);
      if (item) setSelectedItem(item);
    } else {
      setSelectedItem(null);
    }
  }, [modalKey]);

  const openModal = (item, e) => {
    e.preventDefault();
    setSelectedItem(item);
  };

  const closeModal = () => setSelectedItem(null);

  return (
  <>
    <PortfolioGrid
      title="Work Experience"
      items={workExperience}
      onCardClick={() => {}}
    />

    <PortfolioGrid
      title="Portfolio"
      items={portfolioItems}
      onCardClick={openModal}
    />

    {selectedItem && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>×</button>

              <img
                className={selectedItem.imgborder ? 'modal-img-div-border' : 'modal-image'}
                src={selectedItem.img ? selectedItem.img :selectedItem.image}
                alt={selectedItem.title}
                style={selectedItem.imgborder && {objectFit: 'contain'}}
                loading="lazy"
              />

          <h3>{selectedItem.title}</h3>

          <p>{selectedItem.description}</p>

          {(selectedItem.link || selectedItem.github) && (
            <div className="modal-buttons">

              {selectedItem.link && (
                <a className="modal-btn" href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                  {selectedItem.linktext} <FaExternalLinkAlt className="modal-link-go"/>
                </a>
              )}

              {selectedItem.github && (
                <a className="modal-btn github" href={selectedItem.github} target="_blank" rel="noopener noreferrer">
                  GitHub <FaGithub className="modal-link-go"/>
                </a>
              )}

            </div>
          )}



          {selectedItem.availableForLicensing && (
            <p className="modal-link">Contact by email for licensing details and pricing</p>
          )}

          <div className="tags">
            {selectedItem.tags && selectedItem.tags.map((tag, index) => (
              <span key={index} className={`tag ${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
      )}
    </>
  );
};

export default Portfolio;