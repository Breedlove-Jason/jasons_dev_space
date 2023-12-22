import styled from "styled-components";
import "../../assets/css/styles.css";

export const SkillsContainerCard = styled.div`
  position: relative;
  display: grid;
  width: auto;
  height: auto;
  padding-bottom: var(--mb-0-75);
  margin: auto auto var(--mb-2);

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export const CardSkill = styled.div`
  position: relative;
  width: 150px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  margin: auto;
  padding: 2em;
  text-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  transform: perspective(500px);
  transform-style: preserve-3d;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--first-color-lighter);
    clip-path: circle(100px at 80% 20%);
    transition: 0.5s ease-in-out;
  }
  &:hover::before {
    clip-path: circle(280px at 80% -20%);
    transition: transform 0.3s;
    transform: scale(1.08);
  }
  &::after {
    content: "";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: var(--h2-font-size);
    font-style: italic;
    color: var(--text-color);
  }
`;

export const ImgBx = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  transition: 0.5s;
  transform: translate(5%, -10%);
  object-fit: fill;
  ${CardSkill}:hover & {
    width: 150px;
    height: 150px;
    transform: translate(-20%, -10%);
  }
`;

export const ContentBx = styled.div`
  display: flex;
  align-content: space-between;
  text-align: center;
  position: relative;
  width: 0%;
  height: 0%;
  transform: scale(0);
  transition: 1s;
  ${CardSkill}:hover & {
    display: flex;
    height: 100%;
    width: 70%;
    position: relative;
    object-fit: cover;
    text-align: center;
    transform: translate(-42%, 92%);
    transition: 1.5s;
  }
  h2 {
    position: relative;
    font-weight: var(--font-medium);
    color: var(--text-color);
    margin: 0;
    padding: 0;
  }
`;

export const Shadow2 = styled.div`
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
