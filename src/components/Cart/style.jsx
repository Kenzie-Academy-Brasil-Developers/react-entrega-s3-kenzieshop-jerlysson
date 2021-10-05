import styled from "styled-components";

export const CartContainer = styled.section`
  width: 80vw;
  margin: 0 auto;
`;
export const PriceBox = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    color: red;
    font-size: 20px;
    margin: 0 5px;
  }
  @media (max-width: 450px) {
    span {
      font-size: 14px;
    }
    p {
      font-size: 16px;
    }
  }
`;
export const CartBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;
