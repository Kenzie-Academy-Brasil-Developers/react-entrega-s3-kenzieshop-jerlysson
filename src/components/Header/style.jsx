import styled from "styled-components";

export const BoxHeader = styled.header`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 160px;
  background: linear-gradient(0deg, #0000ff14, #ee7afd);
  h1 {
    padding-top: 10px;
    font-size: 40px;
    font-family: "Bebas Neue", cursive;
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const DivMenu = styled.div`
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 860px) {
    form {
      input {
        height: 20px;
      }
    }
    ul {
      justify-content: space-between;

      li {
        font-size: 16px;
      }
    }
    div {
      bottom: 30px;
      font-size: 12px;
      width: 15px;
      height: 15px;
    }
  }
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  input {
    height: 30px;
    border-radius: 10px;
    font-size: 17px;
    padding: 5px;
  }
  ul {
    position: relative;
    height: 35px;
    margin-top: 25px;
    display: flex;
    list-style: none;
    font-size: 30px;
    font-family: "Dosis", sans-serif;
    li {
      margin: 0 5px;
      cursor: pointer;
      :hover {
        border-bottom: 3px solid lightgreen;
      }
    }
  }
`;
export const AlertCart = styled.div`
  font-weight: bold;
  background: #ff000096;
  font-size: 25px;
  color: white;
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 15px;
  text-align: center;
`;
