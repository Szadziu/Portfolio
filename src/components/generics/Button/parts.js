import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from '../../../constants/devices';

export const Button = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1000px;
  height: 10%;
  border-radius: 10px;
  color: ${({ theme }) => theme.black};
  box-shadow: 0 0 13px 0 black;
  user-select: none;
  cursor: pointer;

  grid-area: 3/11/4/6;
  font-size: ${({ theme }) => theme.fontSizes.small};

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    transition: 0.5s;
    content: '';
    background-color: ${({ theme }) => theme.mint};
    width: 10px;
    margin-right: 15px;
    height: 100%;
    box-shadow: 0 0 15px 4px black;
  }

  &:active {
    &::before {
      left: calc(100% - 10px);
      top: 50%;
    }
  }

  &:hover {
    &::before {
      left: calc(100% - 10px);
      top: 50%;
      height: 5px;
    }
  }

  @media (orientation: landscape) {
    & {
      width: 60%;
      height: 15%;
    }
  }

  @media ${device.tabletM} {
    & {
      width: 75%;
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }

  @media ${device.tabletM} {
    & {
      height: 15%;
    }
  }

  @media ${device.tabletL} {
    & {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }
  }

  @media ${device.laptop15} {
    & {
      width: 60%;
    }
  }

  @media ${device.desktop4k} {
    & {
      font-size: ${({ theme }) => theme.fontSizes.huge};
      &::before {
        width: 20px;
      }
      &:active {
        &::before {
          left: calc(100% - 20px);
          top: 50%;
          height: 10px;
        }
      }
    }
  }
`;
