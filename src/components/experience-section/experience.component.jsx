import React, { Fragment } from "react";
import {
  StyledExperienceContainer,
  StyledExperienceTitle,
  StyledExperienceName,
  StyledExperienceHeader,
} from "./experience.styles";

const Experience = () => {
  return (
    <>
      <StyledExperienceHeader>Experience</StyledExperienceHeader>
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
    </>
  );
};

export default Experience;
