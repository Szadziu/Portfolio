import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Img = styled.img`
  margin-left: 10px;
  width: auto;
  height: 40px;
  transition: 0.4s;

  @media${device.tabletM} {
    height: 70px;
  }
  @media${device.tabletL} {
    height: 90px;
  }
  @media${device.desktop13} {
    height: 50px;
    &:hover {
      cursor: pointer;
      transform: scale(1.4);
    }
  }
  @media${device.desktopHD} {
    height: 60px;
  }
  @media${device.desktop4k} {
    height: 150px;
  }
`;

export const Banner = styled.div`
  position: absolute;
  bottom: 10px;
  left: -80vw;
  width: 80vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media${device.desktopHD} {
    left: -75vw;
  }
  @media${device.desktop4k} {
    justify-content: flex-start;
    gap: 10%;
    left: -70vw;
  }
`;

export const SocialLink = styled.a``;
