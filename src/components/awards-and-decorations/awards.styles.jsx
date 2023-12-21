import styled from "styled-components";

export const StyledAwardsSection = styled.section`
  text-align: center;
  padding: 2rem;
  background: #fafafa; // A slightly lighter or darker shade than the comments section for subtle differentiation
  border-radius: 10px;
  margin: 1rem auto; // Adjust margin to control the spacing between sections
  max-width: 600px; // Consistent with the comments section
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); // A softer shadow than the comments section
`;

export const StyledAward = styled.li`
  background: #fff; // Keep the individual elements consistent with comments
  margin: 0.5rem 0; // Slightly tighter spacing than the comments section
  padding: 1rem;
  border-left: 4px solid #d2af67; // A gold-colored border for a hint of prestige
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); // Softer shadow for depth
  list-style-type: none; // No bullet points
  font-style: italic; // Maintains consistency with the comments section
  position: relative; // For positioning badge icons if you choose to add them
`;
export const StyledMedalsBanner = styled.img`
  width: 100%; /* Adjust width as needed */
  max-width: 400px; /* Max width to match the section width */
  height: auto; /* Keep aspect ratio */
  margin-bottom: 1rem; /* Space between the image and the title */
`;
