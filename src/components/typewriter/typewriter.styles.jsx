import styled from "styled-components";
import "../../assets/css/styles.css";

export const TypewriterText = styled.span`
  margin-top: var(--mb-1);
  margin-bottom: var(--mb-2);
  font-size: 2.75rem;
  font-family: "Courier Prime", monospace;
  height: 3rem;
  min-height: 3rem;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1;
  display: inline-block; /* Add this line */
`;
