import React, { Fragment } from "react";
import Typewriter from "../../components/typewriter/typewriter.component";
import SocialIcons from "../../components/social-media/social-media.component";
import ScrollDownIcon from "../../components/scroll-down-icon/scroll-down-icon.component";
import ContactButton from "../../components/contact-button/contact-button.component";
import Experience from "../../components/experience-section/experience.component";
import About from "../about/about.component";
import Skills from "../../components/skills/skills.component";
import BackToTop from "../../components/back-to-top/backToTopButton.component";
import Qualifications from "../../components/qualifications/qualifications.component";
// import "../../assets/css/styles.css";

import {
  HomeContainer,
  HomeContent,
  HomeData,
  HomeWelcome,
  HomeTitle,
} from "./home.styles";

function Home() {
  return (
    <>
      {/*<Header>Header</Header>*/}
      {/*<section className="home section" id="home">*/}
      {/*  <div className="home__container container grid">*/}
      {/*    <div className="home__content grid">*/}
      {/*<div className="home__data">*/}
      {/*<small className="home__welcome s-color">*/}{" "}
      <HomeWelcome>Welcome to my Portfolio Website! {/*</small>*/}</HomeWelcome>
      <HomeTitle> Hey I'm </HomeTitle>
      <Typewriter
        wordsList={[
          "Jason Breedlove",
          "A Combat Soldier",
          "A Computer Programmer",
          "A Full-Stack Developer",
          "A Designer",
          "A Creator",
        ]}
      />
      <HomeContent>
        {/*<h3 className="home__subtitle" id="home-bio">*/}A Full-Stack
        Developer enthusiastic about technology and software development. Once a
        military Sergeant who fought with valor during the Iraq war, now a
        computer programmer.
        {/*</h3>*/}
      </HomeContent>
      {/*<ContactButton />*/}
      {/*<Experience />*/}
      {/*<ScrollDownIcon />*/}
      {/*<About />*/}
      {/*<Skills />*/}
      {/*</div>*/}
      {/*<Qualifications />*/}
      {/*<div className="home__social"></div>*/}
      {/*<SocialIcons />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <BackToTop />
      {/*</section>*/}
    </>
  );
}
export default Home;
