import React from 'react';
import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';
import './carousel.styles.css';
import portfolioData from './portfolioData';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {portfolioData.map((item, index) => (
          <div key={index} className="carousel-item">
            <PortfolioItem
              title={item.title}
              description={item.description}
              image={item.image}
              itermUrl={item.itemUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
