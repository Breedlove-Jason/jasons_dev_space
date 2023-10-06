import React, { Fragment } from "react";
import profileImage from "../assets/images/profile_alt.jpg";
import { StyledProfileImage } from "./profile-image.styles";

const ProfileImage = () => {
  return (
    <Fragment>
      <StyledProfileImage src={profileImage} alt="Jason Breedlove" />
    </Fragment>
  );
};

export default ProfileImage;
