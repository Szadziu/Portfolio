import styled from 'styled-components';

import { device } from '../../../constants/devices';

export const Project = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26%;
  height: 26%;
  border: 4px solid black;
  border-radius: 50%;

  background: center / contain no-repeat url(${({ thumbnail }) => thumbnail});
  color: ${({ theme }) => theme.white};

  text-align: center;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;

  transition: 0.5s;

  @media ${device.desktop} {
    cursor: pointer;
    filter: grayscale(100%);
    -webkit-text-stroke: 1px ${({ theme }) => theme.white};

    &:hover {
      z-index: 10;

      transform: scale(1.5) rotate(1turn);
      box-shadow: 0 0 0 1px ${({ theme }) => theme.mint},
        0 0 0 2px ${({ theme }) => theme.black},
        0 0 1px 2px ${({ theme }) => theme.black};

      filter: grayscale(0);

      h3 {
        font-size: 0.7rem;
        font-weight: 300;
      }

      &::before {
        position: absolute;
        z-index: -1;

        width: 95%;
        height: 30%;
        border-radius: 2rem;

        background-color: ${({ theme }) => theme.darkenedBackground};

        content: '';
      }
    }
  }
  @media ${device.desktopFHD} {
    &:hover {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.mint},
        0 0 0 5px ${({ theme }) => theme.black},
        0 0 2px 3px ${({ theme }) => theme.black};

      h3 {
        font-size: 1rem;
      }
    }
  }
`;

export const TitleOfProject = styled.h3`
  position: absolute;
  top: -30%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  box-shadow: 0 0 0.5px 0.5px black;
  padding: 0.3rem;

  background-color: white;
  color: black;

  font-size: 0.5rem;

  @media ${device.mobileM} {
    font-size: 0.6rem;
  }

  @media ${device.mobileL} {
    font-size: 2.5rem;
  }
  @media ${device.desktop} {
    font-size: 0;
    background-color: transparent;
    box-shadow: none;
    top: 30%;
    width: 80%;
    color: white;
  }
`;

export const UCBadge = styled.img`
  width: 75%;
  transform: translate(-50%, 20%) rotate(-30deg);

  @media ${device.desktop} {
    transform: translate(-50%, -50%) rotate(-30deg);
    width: 60%;
  }
`;
