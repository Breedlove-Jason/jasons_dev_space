import styled from "styled-components";
import "../../assets/css/styles.css";

export const TypewriterContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden; // Hide any overflow
  position: relative;
`;

export const TypewriterText = styled.span`
  margin-top: var(--mb-1);
  margin-bottom: var(--mb-2);
  font-size: 2.75rem;
  font-family: "Architects Daughter", sans-serif;

  min-height: 2.5rem;
  height: 3.5rem; // Set a fixed height
  white-space: nowrap; // Prevent wrapping to the next line
  line-height: 1;
  display: inline-block; // Add this line
`;
