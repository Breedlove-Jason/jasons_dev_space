import React from "react";
import { StyledCommentsSection, StyledComment } from "./CommentStyles"; // Adjust the import path as needed

const CommentsFromSuperiors = () => {
  return (
    <StyledCommentsSection>
      <h2>COMMENTS FROM MILITARY SUPERIORS</h2>
      <ul>
        <StyledComment>
          “Unlimited potential; possesses the strength to be one of tomorrow’s
          leaders.”
        </StyledComment>
        <StyledComment>
          “Displays unique and rare talent; exceptionally well organized and
          very perceptive.”
        </StyledComment>
        <StyledComment>
          “Effectively manages and adapts to stressful situations; maintains
          military bearing under extreme pressure.”
        </StyledComment>
      </ul>
    </StyledCommentsSection>
  );
};

export default CommentsFromSuperiors;
