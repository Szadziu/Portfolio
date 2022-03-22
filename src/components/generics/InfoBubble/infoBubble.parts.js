import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const InfoModal = styled.div`
  position: absolute;
  top: -200%;
  right: -10%;
  z-index: 1;

  width: 60vw;
  height: 30vh;
  border-radius: 0.3rem;
  padding: 1.25rem 1rem;
  box-shadow: 2px 2px 5px 0 ${({ theme }) => theme.black};

  background-color: ${({ theme }) => theme.darkGray};
  color: ${({ theme }) => theme.white};

  font-size: 0.65rem;
  text-align: left;

  overflow-y: scroll;

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
    height: 30vh;
    font-size: 1.2rem;

    &::-webkit-scrollbar {
      width: 0.6rem;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.brighterGray};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.gray};
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.darkGray};
    }
  }
  @media ${device.desktopHD} {
    font-size: 1.5rem;
    height: 25vh;
  }
  @media ${device.desktop4k} {
    width: 20vw;
    padding: 1.8rem 2.5rem;

    font-size: 2.7rem;
  }
`;
