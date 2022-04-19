import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const ModalWrapper = styled.div`
  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.brighterGray};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gray};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.darkerGray};
  }
`;

export const InfoModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;

  overflow: auto;

  width: 95vw;
  max-width: 250px;
  height: 500%;
  padding: 20px 10px;
  box-shadow: 2px 2px 5px 0 ${({ theme }) => theme.black};

  background-color: ${({ theme }) => theme.darkGray};
  color: ${({ theme }) => theme.white};

  font-size: 1rem;
  font-weight: 300;
  text-align: justify;
  hyphens: auto;

  @media ${device.mobileL} {
    top: -25px;
    left: -380px;
    max-width: 320px;
  }

  @media ${device.desktop} {
    height: 250px;
    font-size: 1.2rem;
  }
  @media ${device.desktopFHD} {
    font-size: 1.5rem;
    max-width: 650px;
    left: -125%;
  }
`;
