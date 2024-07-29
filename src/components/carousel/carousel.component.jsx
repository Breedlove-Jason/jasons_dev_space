import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "./carousel.styles.css";
import netflixPreview from "../../assets/images/netflix-preview.png";
import crownClothingPreview from "../../assets/images/crown-clothing-preview.png";
import calculatorPreview from "../../assets/images/calculator-preview.png";
import pacmanPreview from "../../assets/images/pacman-preview.png";
import pigGamePreview from "../../assets/images/pig-game-preview.png";
import flaskBlogPreview from "../../assets/images/blog_flask_preview.png";
import ballPitMatterJS from "../../assets/images/ball-pit-preview.png";
import movieFightJS from "../../assets/images/movie-fight-preview.png";
import monsterRolodex from "../../assets/images/monster-rolodex.png";

export default function Carousel() {
  return (
    <div className="carousel-container">
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem itemId={1}>
          <img src={netflixPreview} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4>Netflix Clone using React</h4>
            <p style={{ fontWeight: "bold" }}>
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
            <h4>Crown Clothing using React</h4>
            <p style={{ fontWeight: "bold" }}>
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
          <img src={pacmanPreview} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4>Pacman JS</h4>
            <p style={{ fontWeight: "bold" }}>
              The JavaScript Pacman Game is an engaging and interactive web
              application that replicates the classic arcade experience.
              Developed with JavaScript, HTML, and CSS, it features smooth
              animations, responsive controls, and authentic gameplay mechanics.
              This project highlights my skills in game development and dynamic
              web programming.
            </p>
            <a
              href="https://pacman-js-build.netlify.app"
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
            <p style={{ fontWeight: "bold" }}>
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
        <MDBCarouselItem itemId={4}>
          <img src={pigGamePreview} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4>Pig Game JS</h4>
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>
              A fun and interactive implementation of the classic Pig Dice Game,
              where two players compete to reach 100 points first. Players take
              turns rolling a die and accumulating points, but must decide
              whether to risk rolling again or bank their points before rolling
              a 1, which would forfeit their turn's points. Built with HTML,
              CSS, and JavaScript, this project demonstrates my ability to
              create engaging and dynamic web applications.
            </p>
            <a
              href="https://pig-game-jscript.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Preview Here
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={5}>
          <img src={flaskBlogPreview} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4>Blog using Flask & SQL</h4>
            <p style={{ fontWeight: "bold" }}>
              A comprehensive Flask-based blog application featuring user
              registration, login, logout, and posting capabilities, along with
              an admin account for managing content. This project showcases my
              skills in backend development, database integration, and user
              authentication, providing a robust and scalable web application
              solution.
            </p>
            <a
              href="https://flask-blog-dc30c1201a7c.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Preview Here
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={6}>
          <img src={ballPitMatterJS} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4>Physics with Matter JS</h4>
            <p style={{ fontWeight: "bold" }}>
              A simple interactive simulation created using the Matter.js
              physics engine. Shapes of various colors and types are randomly
              generated within a confined space, and users can interact with
              them using the mouse.
            </p>
            <a
              href="https://matter-js-ball-pit.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Preview Here
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={7}>
          <img src={movieFightJS} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4>Movie Fight JS</h4>
            <p style={{ fontWeight: "bold" }}>
              A movie comparison app leveraging the OMDB API to fetch and
              compare detailed movie information, allowing users to search for
              movies and visually compare their attributes such as box office
              earnings, awards, and ratings.
            </p>
            <a
              href="https://movie-fight-js.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Preview Here
            </a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={8}>
          <img src={monsterRolodex} className="d-block w-100" alt="..." />
          <MDBCarouselCaption>
            <h4 style={{ color: "black" }}>Monster's Rolodex using React</h4>
            <p style={{ color: "black", fontWeight: "bold" }}>
              A React-based Monster Rolodex app that fetches and displays data
              from an API, allowing users to search and view details of various
              monsters in an interactive and visually appealing card format.
            </p>
            <a
              href="https://monsters-rolodex-in-react.netlify.app"
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
