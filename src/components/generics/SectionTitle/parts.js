import styled from "styled-components";
import { device } from "../../../constants/devices";

export const Title = styled.h1`
  font-family: "Lato", sans-serif;
  color: grey;
  background: #acacac -webkit-gradient(linear, 100% 0, 0 0, from(black), color-stop(0.5, #fff), to(black));
  background-position: -50rem top;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s infinite;
  background-size: 50rem 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -2px;
  grid-area: 1/9/2/1;

  @keyframes shimmer {
    0% {
      background-position: top left;
    }
    70% {
      background-position: center;
    }
    100% {
      background-position: top right;
    }
  }
  @media ${device.mobileS} {
    font-size: 18px;
  }

  @media ${device.tabletM} {
    font-size: 36px;
  }

  @media ${device.desktopHD} {
    font-size: 42px;
  }

  @media ${device.desktop4k} {
    font-size: 84px;
  }
`;
