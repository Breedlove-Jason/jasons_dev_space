import styled from "styled-components";
import "../../assets/css/styles.css";

export const StyledAbout = styled.section`
  padding-top: 1rem;
  position: relative;
  //margin-top: 7rem;
  /* Placeholder if there's any direct style for .about */
`;

export const StyledSectionTitle = styled.h2`
  font-size: 3rem;
  font-family: "", sans-serif;
  text-align: center;
  padding-bottom: 50px;
  margin-left: 0;
`;

export const StyledAboutContainer = styled.div`
  grid-template-columns: repeat(1, 1fr);
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: auto;
  display: grid;
`;

export const StyledAboutDescription = styled.p`
  width: 100%;
  max-width: 768px; /* Adjust as needed */
  margin: auto auto 2.5rem auto;
  padding-top: 3rem;
  text-align: left;
  color: var(--text-color);
  font-size: 1.25rem;
`;

export const StyledContainer = styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
`;

export const StyledGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

// export const StyledProfileImage = styled.img`
//   width: 300px;
//   border-radius: 0.5rem;
//   align-self: center;
//   justify-self: center;
//   box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
// `;
