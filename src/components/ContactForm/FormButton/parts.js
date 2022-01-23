import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Button = styled.button`
  position: relative;
  left: 60%;
  color: ${({ theme }) => theme.pink};
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 1.2px;
  font-size: 0.7rem;
  text-transform: uppercase;
  align-self: flex-start;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 5px;
  @media${device.mobileM} {
    font-size: 1rem;
  }
  @media${device.tabletM} {
    font-size: 1.4rem;
    left: 70%;
  }
  @media${device.tabletL} {
    font-size: 1.9rem;
    left: 75%;
    padding: 20px;
  }
  @media${device.desktop13} {
    font-size: 1.2rem;
    left: 85%;
    top: 5px;
    padding: 7px;

    &:hover {
      color: ${({ theme }) => theme.brighterPink};
    }
  }
  @media${device.desktop15} {
    padding: 10px;
  }
  @media${device.desktopHD} {
    padding: 20px;
    font-size: 1.5rem;
  }
  @media${device.desktop4k} {
    top: 120px;
    left: 80%;
    padding: 40px;
    font-size: 3.5rem;
  }
`;
