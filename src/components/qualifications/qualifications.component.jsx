// Qualifications.jsx
import React from "react";
import timelineData from "./timelineData";
import {
  TimelineSection,
  SectionTitle,
  TimelineContainer,
  TimelineItemRow,
  TimelineDate,
  TimelineCard,
  CardTitle,
  CardSubtitle,
  CardDetails,
} from "./qualifications.styles"; // Replace with your actual file path

const TimelineItem = ({ date, title, subtitle, details }) => (
  <TimelineItemRow>
    <TimelineDate>{date}</TimelineDate>
    <TimelineCard>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardDetails>{details}</CardDetails>
    </TimelineCard>
  </TimelineItemRow>
);

const Qualifications = () => (
  <TimelineSection id="qualification">
    <SectionTitle>Qualifications</SectionTitle>
    <TimelineContainer>
      {timelineData.map((section, index) => (
        <div key={index}>
          <h3>{section.type === "education" ? "Education" : "Experience"}</h3>
          {section.items.map((item, itemIndex) => (
            <TimelineItem key={itemIndex} {...item} />
          ))}
        </div>
      ))}
    </TimelineContainer>
  </TimelineSection>
);

export default Qualifications;
