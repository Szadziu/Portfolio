import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Img = styled.img`
  width: auto;
  height: 2.5rem;
  margin-left: 0.6rem;

  transition: 0.4s;

  @media ${device.tabletM} {
    height: 4.3rem;
  }
  @media ${device.tabletL} {
    height: 5.6rem;
  }
  @media ${device.mobileXL} {
    height: 7.5rem;
  }
  @media ${device.desktop13} {
    height: 3rem;
    &:hover {
      transform: scale(1.4);

      cursor: pointer;
    }
  }
  @media ${device.desktopHD} {
    height: 3.6rem;
  }
  @media ${device.desktop4k} {
    height: 9rem;
  }
`;

export const Banner = styled.div`
  position: absolute;
  left: -80vw;
  bottom: 0.6rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 10vh;

  @media ${device.desktop15} {
    width: 60vw;
    left: -60vw;
  }

  @media ${device.desktopHD} {
    width: 75vw;
    left: -75vw;
  }

  @media ${device.desktop2k} {
    width: 75vw;
    left: -75vw;
  }
  
  @media ${device.desktop4k} {
    width: 75vw;
    left: -75vw;
    gap: 5%;
    justify-content: flex-start;
  }
`;

export const SocialLink = styled.a`
cursor: pointer;
`;
