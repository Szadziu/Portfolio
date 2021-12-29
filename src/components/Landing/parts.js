import styled from "styled-components";
import { device } from "../../constants/devices";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: 2/13/12/6;

  gap: 10%;
`;

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => props.theme.landingSectionBackground};
  overflow: hidden;
  transition: 0.8s;
  background: url(${({ theme }) => theme.landingSectionBackground});
  background-repeat: no-repeat;
  background-position: -75vw 30vh;
  background-size: 150%;

  @media ${device.mobileS} {
    & {
      background-position: -75vw 30vh;
      background-size: 150%;
    }
  }

  @media ${device.mobileSL} and (orientation: landscape) {
    & {
      background-position: -45vw -20vh;
      background-size: 90%;
    }
  }

  @media ${device.tabletS} {
    & {
      background-position: -45vw -10vh;
      background-size: 90%;
    }
  }

  @media ${device.tabletSP} and (orientation: portrait) {
    & {
      background-position: -100vw -10vh;
      background-size: 190%;
    }
  }

  @media ${device.laptop13} {
    & {
      background-position: -40vw -15vh;
      background-size: 80%;
    }
  }

  @media ${device.laptop15} {
    & {
      background-position: -35vw -20vh;
    }
  }

  @media ${device.desktopHD} {
    & {
      background-position: -45vw -20vh;
      background-size: 90%;
    }
  }

  @media ${device.desktop4k} {
    & {
      background-position: -35vw 0vh;
      background-size: 120%;
    }
  }
`;
