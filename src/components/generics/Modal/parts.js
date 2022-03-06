import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const ProjectDesc = styled.p`
  width: 90%;
  height: 50%;
  padding-right: 15px;
  overflow: scroll;
  overflow-x: hidden;

  color: ${({ theme }) => theme.white};

  font-size: 0.8rem;
  line-height: 1rem;
  text-align: justify;

  &::-webkit-scrollbar {
    width: 0.5em;
    @media ${device.tabletL} {
      width: 1.2rem;
    }
    @media ${device.desktop13} {
      width: 0.8rem;
    }
    @media ${device.desktopHD} {
      width: 1.3rem;
    }
    @media ${device.desktop4k} {
      width: 2.4rem;
    }
  }

  &::-webkit-scrollbar-track {
    margin-bottom: 10px;
    box-shadow: inset 0 0 6px ${({ theme }) => theme.dimBackground};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.brighterGray};
    outline: 1px solid ${({ theme }) => theme.gray};
  }

  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tabletM} {
    font-size: 1.6rem;
    line-height: 2rem;
  }
  @media ${device.tabletL} {
    font-size: 2rem;
    line-height: 2.4rem;
  }
  @media ${device.desktop13} {
    width: 65%;

    font-size: 1.2rem;
    line-height: 1.6rem;
  }
  @media ${device.desktopHD} {
    width: 65%;

    font-size: 1.6rem;
    line-height: 2.1rem;
  }
  @media ${device.desktop4k} {
    width: 50%;

    font-size: 2.8rem;
    line-height: 4.1rem;
  }
`;

export const PhotoOfProject = styled.img`
  position: relative;
  top: 50%;
  left: 50%;

  height: 40%;
  transform: translate(-50%, -50%);
  border-bottom: 3px solid transparent;

  transition: 0.5s;
  cursor: pointer;

  @media ${device.desktop13} {
    width: 30%;
    height: 50%;

    &:hover {
      border-color: gold;
    }
  }
  @media ${device.desktop4k} {
    height: 90%;
  }
`;

export const ProjectLink = styled.a`
display: block;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  font-size: 1.2rem;

  transition: 0.5s;

  @media ${device.mobileM} {
    font-size: 1.4rem;
  }
  @media ${device.tabletM} {
    top: 15px;
    right: 15px;

    font-size: 2.1rem;
  }
  @media ${device.tabletL} {
    font-size: 3.1rem;
  }
  @media ${device.desktop13} {
    top: 10px;
    right: 10px;

    font-size: 2rem;

    &:hover {
      transform: scale(1.2);

      cursor: pointer;
    }
  }
  @media ${device.desktopHD} {
    top: 10px;
    right: 20px;

    font-size: 3rem;
  }
  @media ${device.desktop4k} {
    top: 20px;
    right: 30px;

    font-size: 5rem;
  }
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 10%;
  border-bottom: ${({ theme }) => theme.white} solid 2px;

  color: ${({ theme }) => theme.white};

  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;

  @media ${device.mobileM} {
    font-size: 1.2rem;
  }
  @media ${device.tabletM} {
    font-size: 1.8rem;
  }
  @media ${device.tabletL} {
    font-size: 3.1rem;
  }
  @media ${device.desktop13} {
    font-size: 1.7rem;
  }
  @media ${device.desktopHD} {
    font-size: 2.4rem;
  }
  @media ${device.desktop4k} {
    font-size: 4.6rem;
  }
`;

export const ProjectModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  height: 70%;
  transform: translate(-50%, -50%);
  border: 5px solid ${({ theme }) => theme.white};
  border-radius: 20px;

  background-color: ${({ theme }) => theme.darkGray};

  @media ${device.desktop13} {
    width: 60%;
    height: 50%;
  }
  @media ${device.desktop4k} {
    justify-content: space-around;
    width: 70%;
    height: 60%;
  }
`;

export const OverlayWrapper = styled.div`
  position: absolute;

  width: 100vw;
  height: 100vh;
  opacity: 0.8;

  background-color: ${({ theme }) => theme.black};
`;
