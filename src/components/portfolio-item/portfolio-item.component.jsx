import React from "react";
import "./portfolio-item.styles.css"; // We'll create a separate CSS file

const PortfolioItem = ({ image, date, title, description, demoLink }) => {
  return (
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img src={image} alt={title} />
      </div>

      <div className="blog-slider__content">
        <span className="blog-slider__code">{date}</span>
        <div className="blog-slider__title">{title}</div>
        <div className="blog-slider__text">{description}</div>
        {/*Re-add demo button if needed: */}
        <a
          href={demoLink}
          target="_blank"
          className="button blog-slider__button button--flex"
        >
          Demo
          <i className="uil uil-play button__icon"></i>
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
