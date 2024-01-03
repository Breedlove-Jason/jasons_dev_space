import styled from "styled-components";
import "../../assets/css/styles.css";

export const Home = styled.section`
  height: 70vh;
  align-content: space-between;
  margin-top: var(--mb-3);
  padding-bottom: 0;
  margin-bottom: var(--mb-2);
`;

export const Section = styled.div`
  padding: 2rem 0 4rem;
  margin: auto;
  min-height: 80vh;
`;

export const Container = styled.div`
  margin-right: auto;
`;

export const Grid = styled.div`
  display: grid;
`;

export const HomeContent = styled.div`
  padding: 1.5rem 1rem;
  font-family: "Architects Daughter", sans-serif;
  font-size: 2rem;
  //column-gap: 2rem;
`;

export const HomeWelcome = styled.small`
  text-align: center;
  //font-size: var(--small-font-size);
  font-family: "Architects Daughter", sans-serif;
  font-size: 1.5rem;
  color: var(--text-color);
  padding: 1.5rem;
`;

export const SColor = styled.div`
  color: var(--first-color);
`;

export const HomeTitle = styled.h3`
  //margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: "Architects Daughter", sans-serif;
  font-size: 2.75rem;
  //margin-left: 1rem;
  //margin-right: 1rem;
  text-align: center;
`;
