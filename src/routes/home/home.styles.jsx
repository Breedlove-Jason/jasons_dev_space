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

export const HomeContainer = styled.div`
  row-gap: 5rem;
`;

export const HomeContent = styled.div`
  padding-top: 2.5rem;
  column-gap: 2rem;
`;

export const HomeData = styled.div`
  grid-column: initial;
`;

export const HomeWelcome = styled.small`
  text-align: center;
  font-size: var(--small-font-size);
  color: var(--text-color);
  padding: 1.5rem;
`;

export const SColor = styled.div`
  color: var(--first-color);
`;

export const HomeTitle = styled.h3`
  //margin-top: 2.5rem;
  margin-bottom: 2rem;
  font-family: "Architects Daughter", sans-serif;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
`;
