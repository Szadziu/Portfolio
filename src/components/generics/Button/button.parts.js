import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from '../../../constants/devices';

export const Button = styled(Link)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: 3/11/4/6;
  width: 90%;
  max-width: 1000px;
  height: 10%;
  border-radius: 0.6rem;
  box-shadow: 0 0 1px 1px ${({ theme }) => theme.dimBackground};

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};

  font-size: 1rem;
  font-weight: 300;

  transition: 0.5s;
  cursor: pointer;
  user-select: none;

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    width: 0.6rem;
    height: 100%;
    border-radius: 0.6rem;
    margin-right: 1rem;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.black};

    background-color: ${({ theme }) => theme.mint};

    transition: 0.5s;
    content: '';
  }

  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tabletS} {
    width: 70%;
  }
  @media ${device.tabletM} {
    font-size: 1.8rem;
  }
  @media ${device.tabletL} {
    font-size: 2.8rem;
  }
  @media ${device.mobileXL} {
    font-size: 3.4rem;
  }
  @media ${device.desktop13} {
    width: 50%;
    height: 15%;
    font-size: 1.8rem;

    &:active {
      &::before {
        top: 50%;
        left: calc(100% - 0.6rem);
      }
    }

    &:hover {
      background-color: rgba(234, 218, 168, 0.2);
      &::before {
        top: 50%;
        left: calc(100% - 0.6rem);

        height: 0.3rem;
      }
    }
  }
  @media ${device.desktopHD} {
    font-size: 2.5rem;
  }
  @media ${device.desktop4k} {
    height: 10%;
    &:before {
      width: 2rem;
    }

    &:hover {
      &::before {
        top: 50%;
        left: calc(100% - 30px);

        height: 1rem;
      }
    }
  }
`;
