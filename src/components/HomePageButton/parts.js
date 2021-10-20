import styled from "styled-components";

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vw;
  width: 25vh;
  border-radius: 50%;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  position: absolute;
  top: -50vh;
  left: 5vw;
  &:hover {
    cursor: pointer;
    &::before {
      transform: scale(0);
      background-color: transparent;
    }
  }
  &::before {
    transition: 0.5s;
    content: "";
    background-color: red;
    width: 100px;
    height: 20px;
    margin-bottom: 15px;
  }
`;
