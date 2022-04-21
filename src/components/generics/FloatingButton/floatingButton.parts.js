import styled from 'styled-components';
import { device } from '../../../constants/devices';
import floatingIcon from '../../../assets/upArrow.png';

export const Button = styled.button`
  position: fixed;
  z-index: 2;
  right: ${({ xOffset }) => xOffset}px;
  bottom: 0.6rem;

  width: 3rem;
  height: 3rem;
  opacity: ${({ visible }) => visible || 0};
  border-radius: 50%;

  background: center / contain no-repeat url(${floatingIcon});

  transition: opacity 0.3s, transform 0.3s;
  cursor: ${({ visible }) => visible && 'pointer'};

  @media ${device.mobileM} {
    width: 4rem;
    height: 4rem;
  }
  @media ${device.desktop} {
    width: 5rem;
    height: 5rem;
    bottom: 1.25rem;

    &:hover {
      transform: scale(1.2);
    }
  }
  @media ${device.desktopFHD} {
    width: 6.8rem;
    height: 6.8rem;
    bottom: 2rem;
  }
`;
