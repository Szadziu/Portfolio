import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Img = styled.img`
  width: auto;
  height: 40px;
  margin-left: 10px;

  transition: 0.4s;

  @media ${device.tabletM} {
    height: 70px;
  }
  @media ${device.tabletL} {
    height: 90px;
  }
  @media ${device.desktop13} {
    height: 50px;
    &:hover {
      transform: scale(1.4);

      cursor: pointer;
    }
  }
  @media ${device.desktopHD} {
    height: 60px;
  }
  @media ${device.desktop4k} {
    height: 150px;
  }
`;

export const Banner = styled.div`
  position: absolute;
  left: -80vw;
  bottom: 10px;

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

export const SocialLink = styled.a``;
