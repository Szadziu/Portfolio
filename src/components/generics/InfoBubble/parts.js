import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const InfoModal = styled.div`
  position: absolute;
  top: -10%;
  right: 125%;
  z-index: 1;
  height: 30vh;
  width: 60vw;
  background-color: rgb(230, 230, 230);
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 0.65rem;
  box-shadow: 5px 5px 10px 0 black;
  text-align: left;
  @media${device.tabletM} {
    font-size: 1.1rem;
  }
  @media${device.tabletL} {
    font-size: 1.6rem;
  }
  @media${device.desktop13} {
    font-size: 1.2rem;
  }
  @media${device.desktopHD} {
    font-size: 1.7rem;
  }
  @media${device.desktop4k} {
    height: 30vh;
    width: 40vw;
    font-size: 2.7rem;
    padding: 30px 40px;
  }
`;
