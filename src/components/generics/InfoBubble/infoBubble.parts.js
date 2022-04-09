import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const InfoModal = styled.div`
  position: absolute;
  top: -200%;
  right: -10%;
  z-index: 1;

  width: 65vw;
  height: 30vh;
  padding: 1.25rem 1rem;
  box-shadow: 2px 2px 5px 0 ${({ theme }) => theme.black};

  background-color: ${({ theme }) => theme.darkGray};
  color: ${({ theme }) => theme.white};

  font-size: 1rem;
  font-weight: 300;
  text-align: justify;
  hyphens: auto;

  overflow-y: scroll;

  @media ${device.mobileM} {
    font-size: 0.9rem;
  }
  @media ${device.desktop} {
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
  @media ${device.desktopFHD} {
    font-size: 1.5rem;
    height: 25vh;
  }
  @media ${device.desktop4k} {
    width: 20vw;
    padding: 1.8rem 2.5rem;

    font-size: 2.7rem;
  }
`;
