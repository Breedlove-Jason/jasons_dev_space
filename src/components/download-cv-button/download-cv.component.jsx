import React, { Fragment } from "react";
import { StyledCVContainer } from "./download-cv.styles";

const DownloadCV = () => {
  return (
    <Fragment>
      {/*<div className="about__buttons">*/}
      <StyledCVContainer>
        <a
          href="../../assets/files/2024-Resume.pdf"
          download="my_CV"
          target="_blank"
          className="button button--flex"
        >
          Download CV <i className="uil uil-download-alt button__icon"></i>
        </a>
        {/*</div>*/}
      </StyledCVContainer>
    </Fragment>
  );
};

export default DownloadCV;
