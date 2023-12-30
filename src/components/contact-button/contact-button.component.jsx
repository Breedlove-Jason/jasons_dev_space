import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./contact-button.styles";

const ContactButton = () => {
  return (
    <Link to={"contact"}>
      <StyledButton href="#contact">
        Contact Me
        <i className="uil uil-message button__icon"></i>
      </StyledButton>
    </Link>
  );
};

export default ContactButton;
