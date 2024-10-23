// src/components/Highlights.js
import React, { useState, useRef } from 'react';

const Highlights = () => {
  const fileHost = 'https://pub-43b3bb097b7d4e48adc0f8b8e18f2de3.r2.dev/';

  const images = [
    { filename: 'syncpulse-1.png', desc: 'Sync-Pulse highlight' },

    { filename: 'dungeon-base.png', desc: 'Base' },
    { filename: 'dungeon-build.png', desc: 'Base building' },

    { filename: 'puzzleflix-login.png', desc: 'PuzzleFlix login' },
    { filename: 'sudoku.png', desc: 'PuzzleFlix sudoku' },
    { filename: 'eights.png', desc: 'PuzzleFlix eights' },

    { filename: 'ai-map.png', desc: 'AI game' },
    { filename: 'boss-fight.png', desc: 'AI boss' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    galleryRef.current.scrollBy({ left: -galleryRef.current.offsetWidth, behavior: 'smooth' });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    galleryRef.current.scrollBy({ left: galleryRef.current.offsetWidth, behavior: 'smooth' });
  };

  return (
    <section className="highlights" id="highlights">
      <h2 className="projects-header">Highlights</h2>
      <div className="highlights-gallery-container">
        <button className="arrow left" onClick={handlePrev}>
          &lt;
        </button>
        <div className="highlights-gallery" ref={galleryRef}>
          {images.map((image, index) => (
            <div className="highlight-item" key={index}>
              <img
                src={fileHost + image.filename}
                loading="lazy"
                alt={image.desc}
              />
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Highlights;
