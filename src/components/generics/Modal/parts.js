import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.white};
  width: 90%;
  height: 50%;
  font-size: 0.8rem;
  line-height: 1rem;
  overflow: scroll;
  overflow-x: hidden;
  text-align: justify;
  padding-right: 15px;

  &::-webkit-scrollbar {
    width: 0.5em;
    @media${device.tabletL} {
      width: 1.2rem;
    }
    @media${device.desktop13} {
      width: 0.8rem;
    }
    @media${device.desktopHD} {
      width: 1.3rem;
    }
    @media${device.desktop4k} {
      width: 2.4rem;
    }
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  @media${device.mobileM} {
    font-size: 1rem;
  }
  @media${device.tabletM} {
    line-height: 2rem;
    font-size: 1.6rem;
  }
  @media${device.tabletL} {
    font-size: 2rem;
    line-height: 2.4rem;
  }
  @media${device.desktop13} {
    font-size: 1.2rem;
    line-height: 1.6rem;
    width: 65%;
  }
  @media${device.desktopHD} {
    font-size: 1.6rem;
    line-height: 2.1rem;
    width: 65%;
  }
  @media${device.desktop4k} {
    font-size: 2.8rem;
    line-height: 4.1rem;
    width: 50%;
  }
`;

export const PhotoOfProject = styled.img`
  height: 80%;
  position: relative;
  /* background-color: coral; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 3px solid transparent;
  transition: 0.5s;
  padding-bottom: 10px;
  cursor: pointer;
  &:hover {
    border-color: gold;
  }
  @media${device.desktop13} {
    height: 100%;
  }
  @media${device.desktop4k} {
    height: 90%;
  }
`;

export const ProjectLink = styled.a`
  height: 40%;
  @media${device.desktop13} {
    width: 30%;
    height: 50%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2rem;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  @media${device.mobileM} {
    font-size: 1.4rem;
  }
  @media${device.tabletM} {
    font-size: 2.1rem;
    top: 15px;
    right: 15px;
  }
  @media${device.tabletL} {
    font-size: 3.1rem;
  }
  @media${device.desktop13} {
    font-size: 2rem;
    top: 10px;
    right: 10px;
  }
  @media${device.desktopHD} {
    font-size: 3rem;
    top: 10px;
    right: 20px;
  }
  @media${device.desktop4k} {
    font-size: 5rem;
    top: 20px;
    right: 30px;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  width: 80%;
  height: 10%;
  color: white;
  font-size: 1rem;
  border-bottom: ${({ theme }) => theme.white} solid 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media${device.mobileM} {
    font-size: 1.2rem;
  }
  @media${device.tabletM} {
    font-size: 1.8rem;
  }
  @media${device.tabletL} {
    font-size: 3.1rem;
  }
  @media${device.desktop13} {
    font-size: 1.7rem;
  }
  @media${device.desktopHD} {
    font-size: 2.4rem;
  }
  @media${device.desktop4k} {
    font-size: 4.6rem;
  }
`;

export const ProjectModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${({ theme }) => theme.darkGray};
  border: 5px solid white;
  border-radius: 20px;
  width: 90%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media${device.desktop13} {
    width: 60%;
    height: 50%;
  }
  @media${device.desktop4k} {
    width: 70%;
    height: 60%;
    justify-content: space-around;
  }
`;

export const OverlayWrapper = styled.div`
  position: absolute;
  background-color: black;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
`;
