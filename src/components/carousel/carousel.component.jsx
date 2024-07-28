import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import './carousel.styles.css';
import netflixPreview from '../../assets/images/netflix-preview.png';
import crownClothingPreview from '../../assets/images/crown-clothing-preview.png';
import calculatorPreview from '../../assets/images/calculator-preview.png';

export default function Carousel() {
  return (
    <div className="carousel-container">
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem itemId={1}>
          <img src={netflixPreview} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4>Netflix Clone</h4>
            <p style={{ fontWeight: 'bold' }}>
              The Netflix clone project is a full-featured streaming platform
              that includes account management powered by Firebase, allowing
              users to create, manage, and secure their profiles effortlessly.
              The site integrates Stripe for seamless and secure payment
              processing, enabling users to subscribe to different plans with
              ease.
            </p>
            <a
              href="https://netflix-clone-portfolio-52780fe750c8.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Preview Here
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src={crownClothingPreview} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4>Crown Clothing</h4>
            <p style={{ fontWeight: 'bold' }}>
              The Crown Clothing E-Shop is a modern e-commerce platform built
              with React and Redux, featuring a seamless user sign-up and
              sign-in process. It provides a smooth checkout experience,
              allowing users to browse and purchase their favorite clothing
              items effortlessly. This project demonstrates my expertise in
              building dynamic and responsive web applications with robust state
              management.
            </p>
            <a
              href="https://jasonbreedlove.io"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Preview Here
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src={calculatorPreview} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4>Calculator JS</h4>
            <p style={{ fontWeight: 'bold' }}>
              The JavaScript Calculator App is a sleek and responsive web
              application that performs basic arithmetic operations with ease.
              Built with vanilla JavaScript, HTML, and CSS, it features a
              user-friendly interface and seamless functionality. This project
              showcases my ability to create interactive and efficient web
              applications.
            </p>
            <a
              href="https://calc-jscript.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Preview Here
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src={calculatorPreview} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4>Pacman JS</h4>
            <p style={{ fontWeight: 'bold' }}>
              The JavaScript Pacman Game is an engaging and interactive web
              application that replicates the classic arcade experience.
              Developed with JavaScript, HTML, and CSS, it features smooth
              animations, responsive controls, and authentic gameplay mechanics.
              This project highlights my skills in game development and dynamic
              web programming.
            </p>
            <a
              href="https://calc-jscript.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Preview Here
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
