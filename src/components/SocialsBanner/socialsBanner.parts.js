import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Img = styled.img`
  width: auto;
  height: 2.5rem;
  margin-left: 0.6rem;

  transition: 0.4s;

  @media ${device.mobileL} {
    height: 7.5rem;
  }
  @media ${device.desktop} {
    height: 3rem;
    &:hover {
      transform: scale(1.4);

      cursor: pointer;
    }
  }
  @media ${device.desktopFHD} {
    height: 3.6rem;
  }
  @media ${device.desktop4k} {
    height: 9rem;
  }
`;

export const Banner = styled.div`
  position: absolute;
  left: 40%;
  bottom: 0;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  height: 10vh;
`;

export const SocialLink = styled.a`
  cursor: pointer;
`;
