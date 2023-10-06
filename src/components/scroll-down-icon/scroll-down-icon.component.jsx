import React from "react";
import { Link } from "react-router-dom";
import {
  HomeScroll,
  HomeScrollButton,
} from "./scroll-down-icon.styles";
import { Icon } from '@iconify/react';
function ScrollDownIcon() {
  return (
    <HomeScroll>
        <Link to={"about"}>
      <HomeScrollButton href="#about">
          <Icon className="uil uil-mouse-alt home__scroll-mouse" icon="uil:mouse-alt" />
      </HomeScrollButton>
        </Link>
    </HomeScroll>
  );
}

export default ScrollDownIcon;
