import styled from "styled-components";

export const Header = styled.header`
  grid-column: 1 / -1;
  border: 5px solid red;
`;

export const Sidebar = styled.aside`
  grid-column: 1 / 2;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  border: 5px solid #61dafb;
  & > ${Header}, & > ${Sidebar}, & > ${MainContent}, & > ${Footer} {
    /* all the child elements will be a grid item */
  }
`;
