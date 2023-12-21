import React, { Fragment } from "react";
import {
  StyledExperienceContainer,
  StyledExperienceTitle,
  StyledExperienceName,
} from "./experience.styles";

const Experience = () => {
  return (
    <Fragment>
      {/*<div className="about__info">*/}
      <StyledExperienceContainer>
        <div>
          <StyledExperienceTitle> 03+ </StyledExperienceTitle>
          <br />
          <StyledExperienceName>
            {" "}
            Years <br /> Experience{" "}
          </StyledExperienceName>
        </div>
        <div>
          <StyledExperienceTitle> 30+ </StyledExperienceTitle>
          <br />
          <StyledExperienceName>
            {" "}
            Completed <br /> Projects{" "}
          </StyledExperienceName>
        </div>
        <div>
          <StyledExperienceTitle> 02+ </StyledExperienceTitle>
          <br />
          <StyledExperienceName>
            {" "}
            Companies <br /> Worked{" "}
          </StyledExperienceName>
        </div>
      </StyledExperienceContainer>
      {/*</div>*/}
    </Fragment>
  );
};

export default Experience;
