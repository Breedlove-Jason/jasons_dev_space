import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 100;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 175px;
  padding: 5px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
`;
