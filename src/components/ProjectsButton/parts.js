import styled from "styled-components";

export const Button = styled.a`
  position: absolute;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: 15px;
  box-shadow: 0 0 3px 0 black;
  overflow: hidden;
  bottom: -50vh;
  right: 25vw;
  width: 0;
  height: 0;
  transform: rotate(45deg);
  background-color: rgb(255, 255, 255);
  color: rgb(26, 26, 26);
  &:hover {
    cursor: pointer;
  }
`;

export const innerText = styled.span`
  transform: rotate(-45deg);
`;
