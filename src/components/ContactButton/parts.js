import styled from "styled-components";

export const Button = styled.a`
  position: absolute;
  top: 20%;
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: whitesmoke;
  border-radius: 15px;
  font-size: 22px;
  &:hover {
    cursor: pointer;
  }
`;
