import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  background: #acacac -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, ${({ color }) => color}));
  background-position: -65rem top;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 2s infinite alternate;
  background-size: 65rem 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -2px;
  grid-area: 1/12/1/2;

  @keyframes shimmer {
    0% {
      background-position: top left;
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
