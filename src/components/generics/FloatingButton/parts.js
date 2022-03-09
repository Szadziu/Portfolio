import styled from 'styled-components';
import { device } from '../../../constants/devices';
import floatingIcon from '../../../assets/upArrow.png';

export const Button = styled.button`
  position: fixed;
  z-index: 2;
  right: 10px;
  bottom: 10px;

  width: 50px;
  height: 50px;
  opacity: ${({ visible }) => visible || 0};
  border-radius: 50%;

  background: center / contain no-repeat url(${floatingIcon});

  transition: 0.3s;
  cursor: ${({ visible }) => visible && 'pointer'};

  @media ${device.tabletM} {
    width: 90px;
    height: 90px;
    right: 20px;
    bottom: 20px;
  }
  @media ${device.tabletL} {
    width: 120px;
    height: 120px;
    right: 40px;
    bottom: 40px;
  }
  @media ${device.desktop13} {
    width: 80px;
    height: 80px;
    right: 20px;
    bottom: 20px;

    &:hover {
      transform: scale(1.2);
    }
  }
  @media ${device.desktopHD} {
    width: 110px;
    height: 110px;
    right: 30px;
    bottom: 30px;
  }
  @media ${device.desktop4k} {
    width: 210px;
    height: 210px;
    right: 750px;
    bottom: 50px;
  }
`;
