import React, { Fragment } from "react";
import "./about.styles";
import {
  StyledAbout,
  StyledSectionTitle,
  StyledContainer,
  StyledProfileImage,
  StyledGrid,
} from "./about.styles";
import ProfileImage from "../../profile-image/profile-image.component";

const About = () => {
  return (
    <Fragment>
      <StyledAbout id="about">
        <StyledSectionTitle>About Jason...</StyledSectionTitle>
        <span className="section__subtitle"> </span>
        <div className="about__container container grid">
          <ProfileImage />
          <div className="about__data">
            <p className="about__description" id="home-about">
              Full-Stack Web developer with extensive knowledge of software
              development and computer security. Working in the technology field
              since 2004. “Highly decorated Soldier with impressive technology
              experience.” Currently, medically retired from the U.S. Army since
              2009 as a 100% rated disabled veteran.
            </p>
            <div className="intro__bullets">
              <h2>COMMENTS FROM MILITARY SUPERIORS</h2>
              <ul>
                <li>
                  “Unlimited potential; possesses the strength to be one of
                  tomorrow’s leaders.”
                </li>
                <li>
                  “Displays unique and rare talent; exceptionally well organized
                  and very perceptive.”
                </li>
                <li>
                  “Effectively manages and adapts to stressful situations;
                  maintains military bearing under extreme pressure.”
                </li>
              </ul>
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
        </div>
      </StyledAbout>
    </Fragment>
  );
};

export default About;
