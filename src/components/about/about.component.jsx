import React, { Fragment } from "react";
import "./about.styles";
import ProfileImage from "../../profile-image/profile-image.component";
import CommentsFromSuperiorsComponent from "../supervisor-comments/comments-from-superiors.component";
import AwardsAndDecorationsComponent from "../awards-and-decorations/awards-and-decorations.component";
import DownloadCV from "../download-cv-button/download-cv.component";
import "../../assets/css/styles.css";
import {
  StyledAboutDescription,
  StyledAbout,
  StyledSectionTitle,
  // StyledAboutContainer,
} from "./about.styles";

const About = () => {
  return (
    <>
      <StyledSectionTitle>About</StyledSectionTitle>
      <StyledAboutDescription>
        As an accomplished Full-Stack Web Developer, I possess extensive
        experience in software development and a robust background in computer
        security, with my career in technology beginning in 2004. My journey has
        been enriched by my time in the U.S. Army, where I developed key skills
        in leadership and technology, earning recognition as a highly decorated
        soldier. After medically retiring as a 100% rated disabled veteran in
        2009, I've dedicated myself to advancing in the field of web
        development. My approach combines technical proficiency with the
        discipline and resilience honed in the military, enabling me to deliver
        innovative and reliable web solutions.
      </StyledAboutDescription>
      <DownloadCV />
      <CommentsFromSuperiorsComponent />
      <AwardsAndDecorationsComponent />

      <div className="about__buttons"></div>
    </>
  );
};

export default About;
