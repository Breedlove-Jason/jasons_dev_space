import styled from "styled-components";
import "../../assets/css/styles.css";

export const TypewriterContainer = styled.div`
  height: 3.5rem; // Set a fixed height
  overflow: hidden; // Hide any overflow
`;

export const TypewriterText = styled.span`
  margin-top: var(--mb-1);
  margin-bottom: var(--mb-2);
  font-size: 2.75rem;
  font-family: "Courier Prime", monospace;
  height: 3rem; // Set a fixed height
  white-space: nowrap; // Prevent wrapping to the next line
  line-height: 1;
  display: inline-block; // Add this line
`;
