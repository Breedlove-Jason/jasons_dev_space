import React from "react";
import styled, { keyframes } from "styled-components";
import "../../assets/css/styles.css";
import { ReactComponent as MouseIconSVG } from "../../assets/images/mouse.svg";

export const ScrollAnimation = keyframes`
  0% {
    transform: translateY(14px);
    opacity: 0;
  }
  15% {
    transform: translateY(14px);
    opacity: 1;
  }
  30% {
    transform: translateY(14px);
    opacity: 1;
  }
  50% {
    transform: translateY(30px);
    opacity: 1;
  }
  100% {
    transform: translateY(30px);
    opacity: 0;
  }
`;


export const HomeScroll = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
  animation: ${ScrollAnimation} 3s infinite;
`;

export const HomeScrollButton = styled.a`
  color: var(--first-color);
  transition: 0.5s;

  &:hover {
    color: var(--first-color-alt);
    transform: translateY(0.25rem);
  }
`;