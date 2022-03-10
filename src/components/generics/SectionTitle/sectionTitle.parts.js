import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Title = styled.h1`
  grid-area: 1/2/2/12;
  align-self: center;

  background-size: 95rem 100%;
  background: #acacac -webkit-gradient(linear, left top, right top, from(${({ theme }) => theme.mint}), to(${({ theme }) => theme.mint}), color-stop(0.5, ${({ color }) => color}));
  background-position: -95rem top;
  background-repeat: no-repeat; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-align: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 900;
  font-family: 'Lato', sans-serif;
  letter-spacing: -2px;

  animation: shimmer 0.2s infinite alternate;

  @media ${device.mobileM} {
    font-size: 1.6rem;
  }
  @media ${device.tabletM} {
    font-size: 2.2rem;
  }
  @media ${device.tabletL} {
    font-size: 3.24rem;
  }
  @media ${device.mobileXL} {
    font-size: 4.5rem;
  }
  @media ${device.desktop13} {
    font-size: 2.2rem;
  }
  @media ${device.desktop15} {
    background-size: 70rem 100%;

    font-size: 2.8rem;
  }
  @media ${device.desktop4k} {
    background-size: 105rem 100%;

    font-size: 6.8rem;
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
