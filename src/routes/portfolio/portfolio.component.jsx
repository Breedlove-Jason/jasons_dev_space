import React from "react";
import "./portfolio.styles.css";
import PortfolioItem from "../../components/portfolio-item/portfolio-item.component";

const Portfolio = () => {
  const portfolioData = [
    {
      image: "path/to/image1.jpg",
      date: "January 2022",
      title: "Python Datascience Model",
      description: "Developed a datascience model...",
      demoLink: "https://...",
    },
    // Add more project data objects here...
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle"> </span>

      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          {portfolioData.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
