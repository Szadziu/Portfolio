import styled from "styled-components";

export const Button = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: 15px;
  left: -50vw;
  top: 35vh;
  width: 20vw;
  height: 15vh;
  font-size: 3rem;
  color: white;
  transition: 0.8s;
  &::before {
    border-radius: 10px;
    position: absolute;
    top: 15%;
    left: 2%;
    display: block;
    transition: 0.8s;
    content: "";
    background-color: blue;
    width: 20px;
    height: 100px;
    margin-left: -15px;
  }
  &:hover {
    cursor: pointer;
    &::before {
      height: 5px;
      top: 50%;
      left: 100%;
    }
  }
`;

export const innerText = styled.span`
  color: white;
`;
