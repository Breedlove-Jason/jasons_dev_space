import React, { Fragment } from "react";
import "./about.styles";
import ProfileImage from "../../profile-image/profile-image.component";
import CommentsFromSuperiorsComponent from "../../components/supervisor-comments/comments-from-superiors.component";
import AwardsAndDecorationsComponent from "../../components/awards-and-decorations/awards-and-decorations.component";
import "../../assets/css/styles.css";
import {
  StyledAboutDescription,
  StyledAbout,
  StyledSectionTitle,
  StyledAboutContainer,
} from "./about.styles";

const About = () => {
  return (
    <Fragment>
      {/*<section className="about section" id="about">*/}
      {/*<StyledAbout id={"about"}>*/}
      {/*<h2 className="section__title">About</h2>*/}
      {/*<span className="section__subtitle"> </span>*/}
      {/*<div className="about__container container grid">*/}
      <StyledSectionTitle>About</StyledSectionTitle>
      {/*<StyledAboutContainer>*/}
      <ProfileImage />
      <div className="about__data">
        <StyledAboutDescription id={"home-about"}>
          As an accomplished Full-Stack Web Developer, I possess extensive
          experience in software development and a robust background in computer
          security, with my career in technology beginning in 2004. My journey
          has been enriched by my time in the U.S. Army, where I developed key
          skills in leadership and technology, earning recognition as a highly
          decorated soldier. After medically retiring as a 100% rated disabled
          veteran in 2009, I've dedicated myself to advancing in the field of
          web development. My approach combines technical proficiency with the
          discipline and resilience honed in the military, enabling me to
          deliver innovative and reliable web solutions.
        </StyledAboutDescription>
        <CommentsFromSuperiorsComponent />
        <AwardsAndDecorationsComponent />
      </div>

      <div className="about__info">
        {/*  <div>*/}
        {/*    <span className="about__info-title"> 01+ </span>*/}
        {/*    <span className="about__info-name"> Years <br> Experience </span>*/}
        {/*  </div>*/}

        {/*  <div>*/}
        {/*    <span className="about__info-title"> 10+ </span>*/}
        {/*    <span className="about__info-name"> Completed <br> Projects </span>*/}
        {/*  </div>*/}

        {/*  <div>*/}
        {/*    <span className="about__info-title"> 02+ </span>*/}
        {/*    <span className="about__info-name"> Companies <br> Worked</span>*/}
        {/*  </div>*/}
      </div>

      <div className="about__buttons"></div>
      {/*</StyledAboutContainer>*/}
      {/*</div>*/}
      {/*</section>*/}
      {/*</StyledAbout>*/}
    </Fragment>
  );
};

export default About;
