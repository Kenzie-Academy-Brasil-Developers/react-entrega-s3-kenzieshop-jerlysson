import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 860px) {
    flex-wrap: wrap;
  }
`;
