import styled from "styled-components";

export const StyledBackToTopButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000; // Ensure it's above other elements
  opacity: 0.6; // Adjust as needed
  &:hover {
    opacity: 1;
  }
`;
