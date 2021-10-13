import styled from "styled-components";

export const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  top: 0;
  left: 31vw;
  width: 300px;
  height: 100px;
  border-radius: 15px;
  box-shadow: 0 0 3px 0 black;
  color: transparent;
  background-color: white;
  background-size: 200px;
  background-repeat: no-repeat;
  transform-origin: left center;
  transform: rotate(-15deg);
  &:hover {
    cursor: pointer;
  }
`;
