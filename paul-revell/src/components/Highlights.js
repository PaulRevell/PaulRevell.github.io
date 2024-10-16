// src/components/Hightlights.js
import React from 'react';

const Highlights = () => {
  const images = [
    'highlights/1.jpg',
    'highlights/2.jpg',
    'highlights/3.jpg',
  ];

  return (
    <section className="highlights" id="highlights">
      <h2 className="projects-header">Highlight Reel</h2>
      <div className="highlights-gallery">
        {images.map((image, index) => (
          <div className="highlight-item" key={index}>
            <img src={image} alt={`Highlight ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;

