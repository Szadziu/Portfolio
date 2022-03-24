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
  z-index: 1;

  grid-area: 2/8/3/12;

  color: ${({ theme }) => theme.black};

  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    margin-top: 5px;
    left: -10%;
    width: 120%;
    height: 2px;
    background-color: ${({ theme }) => theme.black};
  }
`;
