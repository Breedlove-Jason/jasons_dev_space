import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterTitle,
  FooterSubtitle,
  FooterLinks,
  FooterLink,
  FooterSocials,
  FooterSocial,
  FooterLinkedInIcon,
  FooterGitHubIcon,
  FooterCopy,
} from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <div>
      <FooterTitle>Breedlove</FooterTitle>
      <FooterSubtitle>Full-Stack Software Developer</FooterSubtitle>
    </div>

    <FooterLinks>
      <li>
        <FooterLink as={Link} to="/about">
          About Me
        </FooterLink>
      </li>
      <li>
        <FooterLink as={Link} to="/portfolio">
          My Portfolio
        </FooterLink>
      </li>
      <li>
        <FooterLink as={Link} to="/contact">
          Contact Me
        </FooterLink>
      </li>
    </FooterLinks>

    <FooterSocials>
      <FooterSocial
        href="https://www.linkedin.com/in/jason-breedlove-b216b6237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUCfPY%2FisSIeQADmYB%2B2FWg%3D%3D"
        target="_blank"
      >
        <FooterLinkedInIcon />
      </FooterSocial>
      <FooterSocial href="https://github.com/Breedlove-Jason" target="_blank">
        <FooterGitHubIcon />
      </FooterSocial>
    </FooterSocials>
    <FooterCopy>&#169; Jason Breedlove. All rights reserved</FooterCopy>
  </FooterContainer>
);

export default Footer;
