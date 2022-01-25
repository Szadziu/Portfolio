import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Button = styled.button`
  position: relative;
  left: 60%;

  align-self: flex-start;
  border-radius: 10px;
  padding: 10px;

  background-color: ${({ theme }) => theme.dimBackground};
  color: ${({ theme }) => theme.pink};

  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  @media${device.mobileM} {
    font-size: 1rem;
  }
  @media${device.tabletM} {
    left: 70%;

    font-size: 1.4rem;
  }
  @media${device.tabletL} {
    left: 75%;

    padding: 20px;

    font-size: 1.9rem;
  }
  @media${device.desktop13} {
    top: 5px;
    left: 85%;

    padding: 7px;

    font-size: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.brighterPink};
      cursor: pointer;
    }
  }
  @media${device.desktop15} {
    padding: 10px;
  }
  @media${device.desktopHD} {
    top: 15px;

    padding: 10px;

    font-size: 1.5rem;
  }
  @media${device.desktop4k} {
    top: 120px;
    left: 80%;

    padding: 40px;

    font-size: 3.5rem;
  }
`;
