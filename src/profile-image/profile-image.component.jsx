import React, { Fragment } from "react";
import profileImage from "../assets/images/profile_alt_circle.jpg";
import { StyledProfileImage, StyledContainer } from "./profile-image.styles";

const ProfileImage = () => {
  return (
    <Fragment>
      <StyledContainer>
        <StyledProfileImage src={profileImage} alt="Jason Breedlove" />
      </StyledContainer>
    </Fragment>
  );
};

export default ProfileImage;
