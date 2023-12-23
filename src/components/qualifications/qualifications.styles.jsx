import styled, { keyframes } from "styled-components";
import "../../assets/css/styles.css";

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const TimelineSection = styled.section`
  padding: 40px 0;
  position: relative;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2em;
  margin-bottom: 1em;
  color: #333; // Adjust to fit your color scheme
`;

export const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: auto;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #ddd; // Timeline line color
  }
`;

export const TimelineItemRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
  &:nth-child(odd) {
    justify-content: flex-start;
  }
  &:last-child {
    padding-bottom: 0;
  }
  animation: ${fadeIn} 0.6s ease-in-out;
`;

export const TimelineDate = styled.h5`
  text-align: center;
  margin-bottom: 0;
  font-weight: bold;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: -8px;
    width: 16px;
    height: 2px;
    background: #333; // Adjust to fit your color scheme
    transform: translateY(-50%);
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: -8px;
    width: 16px;
    height: 2px;
    background: #333; // Adjust to fit your color scheme
    transform: translateY(-50%);
  }
`;

export const TimelineCard = styled.div`
  background: white;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px;
  margin-left: 30px;
  margin-right: 30px;
  max-width: 350px;
  text-align: left;
`;

export const CardTitle = styled.h3`
  font-size: 1.2em;
  color: #333; // Adjust to fit your color scheme
`;

export const CardSubtitle = styled.p`
  font-size: 0.9em;
  color: #666; // Adjust to fit your color scheme
`;

export const CardDetails = styled.p`
  font-size: 0.8em;
  color: #999; // Adjust to fit your color scheme
`;

// Rest of your component
