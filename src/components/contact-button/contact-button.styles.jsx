import styled from "styled-components";
import "../../assets/css/styles.css";

export const StyledButton = styled.a`
  /* Styles for .button */
  display: inline-flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  /* These styles are inferred from the stylesheet */
  background-color: var(--first-color);
  color: #fff;

  &:hover {
    background-color: white;
  }

  /* Styles for .button__icon */
  & .button__icon {
    font-size: 1.25rem; /* Example size, adjust as needed */
    margin-left: 0.5rem; /* Example margin, adjust as needed */
  }
`;
