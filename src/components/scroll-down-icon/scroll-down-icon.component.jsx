import React from "react";
import { Link } from "react-router-dom";
import {
  HomeScroll,
  HomeScrollButton,
  StyledMouseIcon,
} from "./scroll-down-icon.styles";

function ScrollDownIcon() {
  return (
    <HomeScroll>
        <Link to={"about"}>
      <HomeScrollButton href="#about">
        <StyledMouseIcon />
      </HomeScrollButton>
        </Link>
    </HomeScroll>
  );
}

export default ScrollDownIcon;
