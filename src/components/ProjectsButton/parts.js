import styled from "styled-components";

export const Button = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  bottom: 20vh;
  right: 20vw;
  border-radius: 50% 50% 0 0;
  width: 250px;
  height: 200px;
  background-color: #030202;
  background-image: linear-gradient(326deg, #030202 0%, #91221e 74%);
  color: whitesmoke;
  &:hover {
    cursor: pointer;
  }
`;
