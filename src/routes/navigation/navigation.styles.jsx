import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: fixed;
  top: 0;
  background-color: #fbfbfe; // To prevent content underneath from showing, add a background color.
  z-index: 1; // To make sure it overlies other elements
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 175px;
  padding: 25px;
  text-decoration: none;
  text-transform: uppercase;
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
