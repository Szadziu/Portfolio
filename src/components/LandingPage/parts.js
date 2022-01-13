import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: 2/13/12/6;

  gap: 10%;
`;

export const BackgroundPhoto = styled.img`
  height: 140vh;
  position: absolute;
  top: 0;
  left: -25vw;

  @media (orientation: portrait) {
    left: -80vw;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  overflow: hidden;
  transition: 0.8s;
`;
