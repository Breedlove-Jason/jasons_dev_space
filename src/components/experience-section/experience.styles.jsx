import styled from "styled-components";
import "../../assets/css/styles.css";

export const StyledExperienceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  //margin-bottom: var(--mb-2-5);
  margin-top: var(--mb-2-5);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const StyledExperienceTitle = styled.span`
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  display: block;
  text-align: center;
`;

export const StyledExperienceName = styled.span`
  font-size: var(--smaller-font-size);
  font-family: var(--roboto-font), serif;
  color: var(--text-color-light);
  display: block;
  text-align: center;
`;
export const StyledExperienceHeader = styled.h2`
  font-family: "Montserrat", sans-serif;
  //font-size: var(--h2-font-size);
  text-align: center;
`;
