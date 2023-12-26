import styled from "styled-components";
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack the items vertically
  align-items: center;
  justify-content: center;
  height: 100%; // Take up the full height of the Sidebar
`;

export const StyledLinkedInIcon = styled(LinkedInIcon)`
  color: purple; // Change the color to purple
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  color: purple; // Change the color to purple
`;
