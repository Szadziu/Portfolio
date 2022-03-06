import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  grid-area: 2/13/12/6;
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
  @media ${device.tabletL} {
    left: -120vw;
  }
  @media ${device.desktop13} {
    left: -20vw;
  }
  @media ${device.desktop4k} {
    left: -30vw;
  }
`;
