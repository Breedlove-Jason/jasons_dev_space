import styled from "styled-components";

export const StyledCommentsSection = styled.section`
  text-align: center;
  padding: 2rem;
  background: #f8f8f8; // Or any other color that fits your design
  border-radius: 10px;
  margin: 2rem auto;
  max-width: 600px; // Or any other appropriate max-width
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  // Your comments section styles here
`;

export const StyledComment = styled.li`
  background: #fff; // Contrast background for individual comments
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  list-style-type: none; // Removes the default bullet points
  font-style: italic; // Italicize the comments
  font-size: 1rem; // Adjust font size as needed
  // Your individual comment styles here
`;
