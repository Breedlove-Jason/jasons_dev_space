import styled from "styled-components";
import "../../assets/css/styles.css";

import "../../GlobalStyles";

import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #604ed9;
  margin-right: var(--mb-0-25);
  padding: 1rem;
  height: 15rem;
`;

export const FooterTitle = styled.h1`
  font-size: var(--h1-font-size);
  color: #fff;
`;

export const FooterSubtitle = styled.span`
  display: block;
  font-size: var(--small-font-size);
  color: #fff;
`;

export const FooterLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.5rem;
`;

export const FooterLink = styled.a`
  //font-size: var(--small-font-size);
  color: #fff;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: var(--mb-1);
`;

export const FooterSocial = styled.a`
  color: #fff;
`;

export const FooterCopy = styled.p`
  font-size: var(--smaller-font-size);
  text-align: center;
  color: #fff;
  margin-top: var(--mb-3);
`;

export const FooterLinkedInIcon = styled(LinkedInIcon)`
  color: #fff;
`;

export const FooterGitHubIcon = styled(GitHubIcon)`
  color: #fff;
`;
