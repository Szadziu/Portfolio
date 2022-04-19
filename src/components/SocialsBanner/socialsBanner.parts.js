import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Img = styled.img`
  width: auto;
  height: 2.5rem;
  margin-left: 0.6rem;

  transition: 0.4s;

  @media ${device.mobileM} {
    height: 3rem;
  }

  @media ${device.desktop} {
    &:hover {
      transform: scale(1.4);

      cursor: pointer;
    }
  }

  @media ${device.desktopFHD} {
    height: 3.6rem;
  }
`;

export const Banner = styled.div`
  grid-area: 11/2/-1/-2;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${device.desktop} {
    grid-area: 11/3/-1/-3;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
`;
