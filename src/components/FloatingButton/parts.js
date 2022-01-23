import styled from 'styled-components';
import floatingIcon from '../../assets/upArrow.png';
import { device } from '../../constants/devices';

export const Button = styled.button`
  position: fixed;
  opacity: ${({ visible }) => visible || 0};
  bottom: 10px;
  right: 10px;
  background-image: url(${floatingIcon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: ${({ visible }) => visible && 'pointer'};
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  @media ${device.tabletM} {
    width: 90px;
    height: 90px;
    bottom: 20px;
    right: 20px;
  }
  @media ${device.tabletL} {
    width: 120px;
    height: 120px;
    bottom: 40px;
    right: 40px;
  }
  @media ${device.desktop13} {
    width: 80px;
    height: 80px;
    bottom: 20px;
    right: 20px;
  }
  @media ${device.desktopHD} {
    width: 110px;
    height: 110px;
    bottom: 30px;
    right: 30px;
  }
  @media ${device.desktop4k} {
    width: 210px;
    height: 210px;
    bottom: 50px;
    right: 750px;
  }
`;
