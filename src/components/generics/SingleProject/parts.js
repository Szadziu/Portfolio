import styled from "styled-components";

export const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  width: 33.33%;
  height: 33.33%;
  text-align: center;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  background-image: url(${({ thumbnail }) => thumbnail});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.5s;
  border: 10px solid white;
  filter: grayscale(100%);

  &:hover {
    cursor: pointer;
    border: 10px solid gray;
    border-radius: 50%;
    /* zdaję sobie sprawę, że animacja działa tak sobie, bo jak zatrzymasz kursor w narożniku jednego z projektów no to się jakby zapętla :P */
    transform: scale(1.5) rotate(1turn);
    z-index: 100;
    filter: grayscale(0);
    font-size: 1.5rem;
  }
`;
