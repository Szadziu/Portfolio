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
  background-image: ${({ theme }) => theme.darkGreenGradient};
  transition: 0.5s;
  border: 10px solid white;
  filter: blur(10px);
  &:hover {
    cursor: pointer;
    border-radius: 50%;
    /* zdaję sobie sprawę, że animacja działa tak sobie, bo jak zatrzymasz kursor w narożniku jednego z projektów no to się jakby zapętla :P */
    transform: scale(1.3) rotate(1turn);
    z-index: 100;
    filter: blur(0);
    font-size: 1.5rem;
  }
`;
