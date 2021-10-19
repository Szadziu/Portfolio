import styled from "styled-components";

export const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  width: 33.33%;
  height: 33.33%;
  text-align: center;
  /* color: ${(props) => props.theme.fontColor}; */
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  /* background-color: ${(props) => `${props.color}`}; */
  background-image: linear-gradient(to bottom, #000, #0f9b0f);
  transition: 0.5s;
  border: 10px solid white;
  filter: blur(10px);
  /* filter: contrast(0); */
  &:hover {
    cursor: pointer;
    border-radius: 50%;
    transform: scale(1.3) rotate(1turn);
    z-index: 100;
    filter: blur(0);
    font-size: 1.5rem;
    /* filter: contrast(1); */
  }
`;
