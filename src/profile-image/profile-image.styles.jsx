import styled from "styled-components";

export const StyledContainer = styled.div`
  display: block; /* Use block to fill the width of the container */
  text-align: center; /* Centers inline or inline-block elements horizontally */
`;

export const StyledProfileImage = styled.img`
  display: inline-block; /* Allows margin auto to work for horizontal centering */
  width: 250px; /* Set this to the size you want */
  height: 250px; /* Should be the same as the width */
  border-radius: 50%;
  object-fit: cover;
  margin: 1rem auto; /* 1rem top and bottom space, auto for left and right centering */
  border: 3px solid #fff; /* Optional: adds a border around the image */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow for depth */
`;
