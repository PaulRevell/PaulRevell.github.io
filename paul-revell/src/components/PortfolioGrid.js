// src/components/PortfolioGrid.js
import React, { useState } from 'react';

const PortfolioGrid = ({ title, items, onCardClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const paginatedItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className={title} id={title}>
      <h2 className="projects-header">{title}</h2>
      <div className="portfolio-grid">
        {paginatedItems.map((item) => (
          <a
            key={item.id}
            href={item.link || '#'}
            onClick={(e) => onCardClick(item, e)}
            className="card"
          >
            <div className={item.imgborder && 'img-div-border'}>
              <img style={item.imgborder && {objectFit: 'contain'}} src={item.image} alt={item.title} />
            </div>
            <p className='tagline'>{item.title}</p>
            {item.tagline && <p className='tagline'>{item.tagline}</p>}
          </a>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </button>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              className={currentPage === idx + 1 ? 'active' : ''}
              onClick={() => goToPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioGrid;
