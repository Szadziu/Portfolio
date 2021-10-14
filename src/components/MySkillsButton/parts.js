import styled from "styled-components";

export const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -20vh;
  left: 31vw;
  font-size: 3rem;
  width: 300px;
  height: 100px;
  color: white;
  transform-origin: left center;
  &:hover {
    cursor: pointer;
  }
`;
