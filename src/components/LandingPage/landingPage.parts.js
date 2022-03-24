import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  grid-area: 2/13/12/6;
  @media ${device.desktop13} {
    font-size: 1rem;
  }
`;

export const BackgroundPhoto = styled.img`
  position: absolute;
  top: 0;
  left: -25vw;

  height: 140vh;

  @media ${device.mobileS} {
    left: -110vw;
  }
  @media ${device.mobileL} {
    left: -100vw;
  }
  @media ${device.tabletS} {
    left: -40vw;
  }
  @media ${device.tabletM} {
    left: -70vw;
  }
  @media ${device.mobileXL} {
    left: -120vw;
  }
  @media ${device.desktop13} {
    left: -20vw;
  }
  @media ${device.desktop4k} {
    left: -30vw;
  }
`;

export const Workplace = styled.span`
  position: relative;
  top: 50%;
  z-index: 1;

  grid-area: 1/8/2/12;

  color: ${({ theme }) => theme.black};
  /* background-color: violet; */

  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;

  @media ${device.mobileM} {
    font-size: 1.2rem;
  }
  @media ${device.mobileXL} {
    font-size: 3rem;
  }
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
  @media ${device.tabletM} {
    font-size: 1.8rem;
  }
  @media ${device.tabletL} {
    font-size: 2.3rem;
  }
  @media ${device.desktop13} {
    font-size: 1.5rem;
  }
  @media ${device.desktop2k} {
    font-size: 2rem;
  }
  @media ${device.desktop4k} {
    font-size: 3rem;
  }

  &::after {
    position: absolute;
    bottom: -10px;
    left: -10%;

    width: 120%;
    height: 2px;

    background-color: ${({ theme }) => theme.black};
    content: '';

    @media ${device.tablet} {
      width: 110%;
      left: -5%;
    }
    @media ${device.desktop13} {
      bottom: 30%;
    }
  }
`;
