import styled from 'styled-components';

import { device } from '../../../constants/devices';

import underConstruction from '../../../assets/projectsIcons/underConstruction.png';

export const Project = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26%;
  height: 26%;
  border: 4px solid black;
  border-radius: 50%;

  background: center / contain no-repeat url(${({ thumbnail }) => thumbnail});
  color: ${({ theme }) => theme.white};

  font-size: 0;
  text-align: center;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px ${({ theme }) => theme.white};
  text-decoration: none;
  text-transform: uppercase;

  transition: 0.5s;
  filter: grayscale(100%);

  &:hover {
    z-index: 10;

    transform: scale(1.1);
    box-shadow: 0 0 0 10px ${({ theme }) => theme.mint},
      0 0 0 15px ${({ theme }) => theme.black},
      0 0 10px 20px ${({ theme }) => theme.black};

    font-size: 0.5rem;

    cursor: pointer;
    filter: grayscale(0);

    &::after {
      position: absolute;
      top: 20%;
      left: 25%;

      width: 80%;
      height: 80%;
      transform: rotate(15deg);

      background: ${({ done }) =>
        done || `center / contain no-repeat url(${underConstruction})`};

      content: '';
    }

    &::before {
      position: absolute;
      z-index: -1;

      width: 95%;
      height: 30%;
      border-radius: 30px;

      background-color: ${({ theme }) => theme.darkenedBackground};

      content: '';
    }
  }

  @media ${device.desktop13} {
    &:hover {
      transform: scale(1.5) rotate(1turn);

      font-size: 0.7rem;
    }
  }

  @media ${device.desktop4k} {
    &:hover {
      font-size: 2rem;
    }
  }
`;
