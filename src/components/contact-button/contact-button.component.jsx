import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './contact-button.styles';

const ContactButton = ({ link }) => {
  return (
    <div className="contact-button">
      <a href={link} className="button">
        Contact Me
      </a>
    </div>
  );
};

export default ContactButton;
