import styled from "styled-components";

export const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 33.33%;
  height: 33.33%;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  background-color: ${(props) => `${props.color}`};
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(0.8);
  }
`;
