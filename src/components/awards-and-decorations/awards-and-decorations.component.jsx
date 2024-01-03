import React from "react";
import {
  StyledAwardsSection,
  StyledAward,
  StyledMedalsBanner,
} from "./awards.styles"; // Import the new styled component
import medalsImage from "../../assets/images/army-medals-midjourney.png";

const AwardsAndDecorationsComponent = () => {
  return (
    <>
      {" "}
      <StyledAwardsSection>
        <StyledMedalsBanner src={medalsImage} alt="Military Medals" />{" "}
        <h2>AWARDS AND DECORATIONS:</h2>
        <StyledAward>
          Awarded the Army Commendation Medal with Valor for bravery in action
          in the Iraq War, the Presidential Unit Citation, the Combat Action
          Badge, the Army Achievement Medal and many others.
        </StyledAward>
      </StyledAwardsSection>
    </>
  );
};

export default AwardsAndDecorationsComponent;
