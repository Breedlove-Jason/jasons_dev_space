import React from "react";
import {
  SocialContainer,
  StyledLinkedInIcon,
  StyledGitHubIcon,
} from "./social-media.styles";

const SocialIcons = () => {
  return (
    <SocialContainer>
      <a
        href="https://www.linkedin.com/in/jason-breedlove-b216b6237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUCfPY%2FisSIeQADmYB%2B2FWg%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        id="myLinkedIn"
      >
        <StyledLinkedInIcon />
      </a>
      <a
        href="https://github.com/j-breedlove"
        target="_blank"
        rel="noopener noreferrer"
        id="myGithub"
      >
        <StyledGitHubIcon />
      </a>
    </SocialContainer>
  );
};

export default SocialIcons;
