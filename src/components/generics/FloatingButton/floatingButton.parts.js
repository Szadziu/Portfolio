import styled from 'styled-components';
import { device } from '../../../constants/devices';
import floatingIcon from '../../../assets/upArrow.png';

export const Button = styled.button`
  position: fixed;
  z-index: 2;
  right: 0.6rem;
  bottom: 0.6rem;

  width: 3rem;
  height: 3rem;
  opacity: ${({ visible }) => visible || 0};
  border-radius: 50%;

  background: center / contain no-repeat url(${floatingIcon});

  transition: 0.3s;
  cursor: ${({ visible }) => visible && 'pointer'};

  @media ${device.mobileL} {
    width: 8rem;
    height: 8rem;
    right: 2.5rem;
    bottom: 2.5rem;
  }
  @media ${device.desktop} {
    width: 5rem;
    height: 5rem;
    right: 1.25rem;
    bottom: 1.25rem;

    &:hover {
      transform: scale(1.2);
    }
  }
  @media ${device.desktopFHD} {
    width: 6.8rem;
    height: 6.8rem;
    right: 10.5rem;
    bottom: 2rem;
  }
  @media ${device.desktop2k} {
    right: 15.5rem;
    bottom: 6.25rem;
  }
  @media ${device.desktop4k} {
    width: 9.3rem;
    height: 9.3rem;
    right: 72rem;
    bottom: 3.1rem;
  }
`;
