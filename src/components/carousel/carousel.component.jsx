import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.styles.css";
import netflixPreview from "../../assets/images/netflix-preview.png";
// import image1 from "../../assets/images/image1.jpg";
import React from "react";

// Update the CarouselProjects component
// Update the CarouselProjects component
// Ensure the Carousel.Item has the className "carousel-item"
const CarouselProjects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={netflixPreview}
            alt="Netflix Clone"
          />
          <Carousel.Caption>
            <h3>Netflix Clone</h3>
            <p>
              The Netflix clone project is a full-featured streaming platform
              that includes account management powered by Firebase, allowing
              users to create, manage, and secure their profiles effortlessly.
              The site integrates Stripe for seamless and secure payment
              processing, enabling users to subscribe to different plans with
              ease.
              <a
                href="https://netflix-clone-portfolio-52780fe750c8.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="preview-button"
              >
                Preview Here
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={"https://placehold.co/600x400"}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={"https://placehold.co/600x400"}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselProjects;
