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

export const BackgroundPhoto = styled.div`
  position: absolute;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: 112.5vh 150vh;
  background-position: -56.25vh 0;
  width: 100%;
  height: 100%;
`;

export const Workplace = styled.span`
  position: relative;
  top: 10%;
  z-index: 1;

  grid-area: 1/8/2/12;

  color: ${({ theme }) => theme.black};

  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 110%;
    height: 2px;

    background-color: ${({ theme }) => theme.black};
    content: '';
  }

  @media ${device.mobileM} {
    font-size: 1.3rem;
    &::after {
      bottom: -10px;
    }
  }
  @media ${device.mobileL} {
    &::after {
      width: 100%;
    }
  }
  @media ${device.desktop} {
    top: 30%;
    &::after {
      bottom: 20px;
      width: 100%;
    }
  }
`;
