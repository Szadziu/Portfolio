import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const InfoModal = styled.div`
  position: absolute;
  top: -200%;
  right: -10%;
  z-index: 1;

  width: 60vw;
  height: 30vh;
  border-radius: 5px;
  padding: 20px 15px;
  box-shadow: 2px 2px 5px 0 ${({ theme }) => theme.black};

  background-color: ${({ theme }) => theme.darkGray};
  color: ${({ theme }) => theme.white};

  font-size: 0.65rem;
  font-family: 'Changa', sans-serif;
  text-align: left;

  overflow:scroll;

  @media ${device.mobileM} {
    font-size: 0.9rem;
  }
  @media ${device.tabletS} {
    font-size: 0.8rem;
    top: -25%;
    right: 120%;
    width: 35vw;
    height: 25vh;
  }
  @media ${device.tabletM} {
    font-size: 1rem;
    height: 20vh;
  }
  @media ${device.tabletL} {
    font-size: 1.4rem;
  }
  @media ${device.desktop13} {
    width: 40vw;

    font-size: 1rem;
  }
  @media ${device.desktopHD} {
    font-size: 1.5rem;
  }
  @media ${device.desktop4k} {
    width: 30vw;
    padding: 30px 40px;

    font-size: 2.7rem;
  }
`;
