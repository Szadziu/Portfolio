import styled from "styled-components";

export const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  width: 30%;
  height: 30%;
  text-align: center;
  color: white;
  -webkit-text-stroke: 3px white;
  text-decoration: none;
  text-transform: uppercase;
  background-image: url(${({ thumbnail }) => thumbnail});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.5s;
  filter: grayscale(100%);

  &:hover {
    cursor: pointer;
    border: 4px solid black;
    box-shadow: 0 0 0 10px yellow, 0 0 0 14px black, 0 0 10rem 100px black;
    border-radius: 50%;
    transform: scale(1.5) rotate(1turn);
    z-index: 100;
    filter: grayscale(0);
    font-size: 1.5rem;
    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      width: 95%;
      height: 30%;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 30px;
    }
  }
`;
