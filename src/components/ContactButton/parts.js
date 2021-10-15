import styled from "styled-components";

export const Button = styled.a`
  position: absolute;
  bottom: 10vh;
  right: -50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 5vw;
  border-radius: 15px;
  font-size: 3rem;
  color: white;
  &::before {
    position: absolute;
    top: 5%;
    left: 0;
    display: block;
    transition: 0.8s;
    content: "";
    background-color: green;
    width: 20px;
    height: 100px;
    margin-right: 15px;
  }
  &:hover {
    cursor: pointer;
    &::before {
      width: 100%;
      opacity: 0.2;
    }
  }
`;
