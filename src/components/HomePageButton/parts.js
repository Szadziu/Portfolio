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
  left: 15vw;
  &:hover {
    cursor: pointer;
    color: white;
    &::before {
      width: 5px;
      top: 32vh;
    }
  }
  &::before {
    border-radius: 20px;
    position: absolute;
    top: -3vh;
    transition: 0.8s;
    content: "";
    background-color: red;
    width: 100px;
    height: 20px;
    margin-bottom: 15px;
  }
`;
