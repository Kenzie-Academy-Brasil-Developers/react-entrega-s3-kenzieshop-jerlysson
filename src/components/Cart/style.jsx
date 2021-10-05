import styled from "styled-components";

export const CartContainer = styled.section`
  width: 80vw;
  margin: 0 auto;
`;
export const CartBox = styled.div`
  display: flex;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 860px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
