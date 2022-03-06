import styled from 'styled-components';

import { device } from '../../../constants/devices';

import underConstruction from '../../../assets/projectsIcons/underConstruction.png';

export const Project = styled.a`
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
  
  font-size: 0;
  text-align: center; 
  letter-spacing: 2px;
  -webkit-text-stroke: 1px ${({ theme }) => theme.white};
  text-decoration: none;
  text-transform: uppercase;
  
  transition: 0.5s;
  pointer-events: ${({done})=>done || 'none'};
  /* filter: grayscale(100%); */
  @media ${device.desktop13} {
    &:hover {
      z-index: 10;
      
      transform: scale(1.5) rotate(1turn);
    box-shadow: 0 0 0 1px ${({ theme }) => theme.mint},
      0 0 0 2px ${({ theme }) => theme.black},
      0 0 1px 2px ${({ theme }) => theme.black};

    font-size: 0.7rem;

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
  }

  @media ${device.desktop4k} {
    &:hover {
      font-size: 2rem;
    }
  }
`;

export const UCBadge = styled.img`
transform: rotate(-30deg);
width: 75%;
`