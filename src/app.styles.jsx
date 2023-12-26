import styled from "styled-components";
import "./assets/css/styles.css";

export const Header = styled.header`
  grid-column: 1 / -1;
  border: 5px solid red;
`;

export const Sidebar = styled.aside`
  grid-column: 1 / 2;
  .home__social-icon {
    font-size: 1rem; // Reduce the size of the icons
  }

  .home__social-icon:hover {
    color: var(--first-color-alt);
  }
  border: 5px solid green;
`;

export const MainContent = styled.main`
  grid-column: 2 / 4;
  border: 5px solid blue;
`;

export const Footer = styled.footer`
  grid-column: 1 / -1;
  border: 5px solid yellow;
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 2.6fr 0.2fr; // Allocate less space to the Sidebar and more space to the MainContent
  gap: 20px;
  border: 5px solid #61dafb;
  & > ${Header}, & > ${Sidebar}, & > ${MainContent}, & > ${Footer} {
    /* all the child elements will be a grid item */
  }
`;
