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
  max-width: 300px;
  height: 12%;
  max-height: 70px;

  border-radius: 2px;
  box-shadow: 0 0 1px 1px ${({ theme }) => theme.dimBackground};

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};

  font-size: 1.2rem;
  font-weight: 300;

  cursor: pointer;
  user-select: none;

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    width: 10px;
    height: 100%;

    border-radius: 1px;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.black};

    background-color: ${({ theme }) => theme.mint};

    transition: 0.5s;
    content: '';
  }

  @media ${device.mobileM} {
    font-size: 1.5rem;
  }

  @media ${device.mobileL} {
    height: 20%;
  }

  @media ${device.desktop} {
    &:hover {
      background-color: ${({ theme }) => theme.beige};
      &::before {
        top: 50%;
        left: calc(100% - 10px);

        height: 5px;
      }
    }
  }
`;
