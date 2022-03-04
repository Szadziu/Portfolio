import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const InfoModal = styled.div`
  position: absolute;
  top: -10%;
  right: 125%;
  z-index: 1;

  width: 60vw;
  height: 30vh;
  border-radius: 20px;
  padding: 10px 15px;
  box-shadow: 5px 5px 10px 0 ${({ theme }) => theme.black};

  background-color: ${({ theme }) => theme.darkGray};
  color: ${({ theme }) => theme.mint};

  font-size: 0.65rem;
  font-family: 'Changa', sans-serif;
  text-align: left;

  @media ${device.tabletM} {
    font-size: 1.1rem;
  }
  @media ${device.tabletL} {
    font-size: 1.6rem;
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
