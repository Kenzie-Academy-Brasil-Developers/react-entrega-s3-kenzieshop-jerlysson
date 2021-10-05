import styled from "styled-components";

export const CardProduct = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  width: 200px;
  height: 250px;
  margin: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-family: "Dosis", sans-serif;
    font-weight: bold;
  }
  img {
    width: 10em;
    height: 13em;
    border-radius: 10px;
  }
  button {
    font-weight: bold;
    color: white;
    background: green;
    width: 100%;
    height: 30px;
    cursor: pointer;
    :hover {
      background: white;
      border: 2px solid green;
      color: green;
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
