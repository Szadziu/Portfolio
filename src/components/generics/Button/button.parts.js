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
  max-width: 320px;
  height: 10%;
  max-height: 70px;
  border-radius: 0.6rem;
  box-shadow: 0 0 1px 1px ${({ theme }) => theme.dimBackground};

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};

  font-size: 1.2rem;
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

  @media ${device.mobileM} {
    font-size: 1.8rem;
  }

  @media ${device.mobileL} {
    height: 20%;
  }

  @media ${device.desktop} {
    width: 50%;
    height: 15%;

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
`;
