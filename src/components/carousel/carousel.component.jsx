import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.styles.css";
// import image1 from "../../assets/images/image1.jpg";
import React from "react";

const CarouselProjects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className={"carousel-item"}>
          <img
            className="d-block w-100"
            src={"https://placehold.co/600x400"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
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
        <Carousel.Item>
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
