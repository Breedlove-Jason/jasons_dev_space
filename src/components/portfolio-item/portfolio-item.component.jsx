import React from 'react';
import './portfolio-item.styles.css';

const PortfolioItem = ({ title, description, image, itemUrl }) => {
  return (
    <div className="portfolio-item">
      <div className="blog-slider__item">
        <div className="blog-slider__img">
          <img src={image} alt={title} />
        </div>
        <div className="blog-slider__content">
          <h3 className="blog-slider__title">{title}</h3>
          <p className="blog-slider__text">{description}</p>
          <a
            href={itemUrl}
            className="preview-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
