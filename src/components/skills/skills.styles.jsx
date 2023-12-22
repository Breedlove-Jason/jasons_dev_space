import styled from "styled-components";
import "../../assets/css/styles.css";

export const SkillsContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  justify-content: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

export const SkillCard = styled.div`
  perspective: 1000px;
  width: 150px;
  height: 200px;
  padding-top: 20px;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;

export const ImgBx = styled.div`
  width: 100px;
  height: 100px;
  position: relative; // Ensure the positioning context for the title
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .skill-title {
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
    bottom: -20px; // Adjust as needed
    left: 50%;
    transform: translateX(-50%);
    // Add the desired styling that matches the CSS title appearance
  }
`;

export const SkillsTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  // Add any other styling you desire for the title
`;
