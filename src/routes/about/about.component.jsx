import React, { Fragment } from "react";
import "./about.styles";
import ProfileImage from "../../profile-image/profile-image.component";
import CommentsFromSuperiors from "../../components/supervisor-comments/CommentsFromSuperiors";
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
      <StyledAbout id={"about"}>
        {/*<h2 className="section__title">About</h2>*/}
        {/*<span className="section__subtitle"> </span>*/}
        <StyledSectionTitle>About</StyledSectionTitle>
        {/*<div className="about__container container grid">*/}
        <StyledAboutContainer>
          <ProfileImage />
          <div className="about__data">
            <StyledAboutDescription id={"home-about"}>
              As an accomplished Full-Stack Web Developer, I possess extensive
              experience in software development and a robust background in
              computer security, with my career in technology beginning in 2004.
              My journey has been enriched by my time in the U.S. Army, where I
              developed key skills in leadership and technology, earning
              recognition as a highly decorated soldier. After medically
              retiring as a 100% rated disabled veteran in 2009, I've dedicated
              myself to advancing in the field of web development. My approach
              combines technical proficiency with the discipline and resilience
              honed in the military, enabling me to deliver innovative and
              reliable web solutions.
            </StyledAboutDescription>
            <div className="intro__bullets">
              <CommentsFromSuperiors />
              {/*<h2>COMMENTS FROM MILITARY SUPERIORS</h2>*/}
              {/*<ul>*/}
              {/*  <li>*/}
              {/*    “Unlimited potential; possesses the strength to be one of*/}
              {/*    tomorrow’s leaders.”*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    “Displays unique and rare talent; exceptionally well organized*/}
              {/*    and very perceptive.”*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    “Effectively manages and adapts to stressful situations;*/}
              {/*    maintains military bearing under extreme pressure.”*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </div>
            <div className="intro__bullets">
              <h2>AWARDS AND DECORATIONS:</h2>
              <ul>
                <li>
                  Awarded the Army Commendation Medal with Valor for bravery in
                  action, the Combat Action Badge, the Army Achievement Medal,
                  and the Presidential Unit Citation.
                </li>
              </ul>
            </div>
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
        </StyledAboutContainer>
        {/*</div>*/}
        {/*</section>*/}
      </StyledAbout>
    </Fragment>
  );
};

export default About;
