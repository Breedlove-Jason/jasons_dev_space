import styled from "styled-components";

export const StyledAbout = styled.section`
  /* Placeholder if there's any direct style for .about */
`;

export const StyledSectionTitle = styled.h2`
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-2-5);
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
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

export const StyledProfileImage = styled.img`
  width: 300px;
  border-radius: 0.5rem;
  align-self: center;
  justify-self: center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
`;
