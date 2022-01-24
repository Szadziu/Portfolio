import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  background: #acacac -webkit-gradient(linear, left top, right top, from(${({ theme }) => theme.brighterPink}), to(${({ theme }) => theme.mint}), color-stop(0.5, ${({ color }) => color}));
  background-position: -65rem top;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 2s infinite alternate;
  background-size: 65rem 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.3rem;
  letter-spacing: -2px;
  grid-area: 1/13/2/1;
  align-self: center;
  @media ${device.mobileM} {
    font-size: 1.6rem;
  }
  @media ${device.tabletM} {
    font-size: 2.2rem;
  }
  @media ${device.tabletL} {
    font-size: 3.24rem;
  }
  @media ${device.desktop13} {
    font-size: 2.2rem;
  }
  @media ${device.desktop15} {
    font-size: 2.8rem;
    background-size: 70rem 100%;
  }
  @media ${device.desktop4k} {
    font-size: 6.8rem;
    background-size: 105rem 100%;
  }

  @keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
`;
