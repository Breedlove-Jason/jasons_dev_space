import React, { useEffect, useState, Fragment } from "react";
import SocialIcons from "../../components/social-media/social-media.component";
import ScrollDownIcon from "../../components/scroll-down-icon/scroll-down-icon.component";
import ContactButton from "../../components/contact-button/contact-button.component";
import Experience from "../../components/experience-section/experience.component";
import About from "../about/about.component";
// import Skills from "../../components/skills/skills.component";
import BackToTop from "../../components/back-to-top/backToTopButton.component";
// import PortfolioItem from "../../components/portfolio-item/portfolio-item.component";
// import Qualifications from "../../components/qualifications/qualifications.component";
import Portfolio from "../portfolio/portfolio.component";
import Timeline from "../../components/timeline/timeline.component";
import "../../assets/css/styles.css";

function Home() {
  const wordsList = [
    "Jason Breedlove",
    "Combat Soldier",
    "Computer Programmer",
    "Full-Stack Developer",
    "Designer, Creator",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (currentCharIndex < wordsList[currentWordIndex].length) {
      const timeoutId = setTimeout(() => {
        setText(
          (prevText) =>
            prevText + wordsList[currentWordIndex][currentCharIndex],
        );
        setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentWordIndex(
          (prevWordIndex) => (prevWordIndex + 1) % wordsList.length,
        );
        setCurrentCharIndex(0);
        setText("");
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentWordIndex, currentCharIndex, text]);

  return (
    <Fragment>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__data">
              <small className="home__welcome s-color">
                {" "}
                Welcome to my Portfolio Website!{" "}
              </small>
              <h1 className="home__title"> Hey I'm </h1>
              <div id="typewriter">{text}</div>
              <h3 className="home__subtitle" id="home-bio">
                A Full-Stack Developer enthusiastic about technology and
                software development. Once a military Sergeant who fought with
                valor during the Iraq war, now a computer programmer.{" "}
                <i>
                  Awarded the Army Commendation Medal with Valor for bravery in
                  action in the Iraq War, the Presidential Unit Citation, the
                  Combat Action Badge, the Army Achievement Medal and many
                  others.
                </i>
              </h3>
              <ContactButton />
              <Experience />
              <ScrollDownIcon />
              <About />
              {/*<Skills />*/}
              {/*<PortfolioItem />*/}
              <Portfolio />
              <Timeline />
              {/*<Qualifications />*/}
            </div>
            <div className="home__social"></div>
            <SocialIcons />
          </div>
        </div>
        <BackToTop />
      </section>
    </Fragment>
  );
}
export default Home;
