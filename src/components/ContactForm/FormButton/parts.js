import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Button = styled.button`
  /* position: relative;
  top: 1rem;
  left: 80%; */
  /* height: 10%; */
  align-self: flex-end;
  border-radius: 10px;
  padding: 10px;
  margin-right: 1rem;

  background-color: ${({ theme }) => theme.dimBackground};
  //!development
  /* background-color: coral; */
  color: ${({ theme }) => theme.pink};

  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  @media${device.mobileM} {
    font-size: 1rem;
  }
  @media${device.tabletM} {
    /* left: 70%; */

    font-size: 1.4rem;
  }
  @media${device.tabletL} {
    /* left: 75%;

    padding: 20px; */

    font-size: 1.9rem;
  }
  @media${device.desktop13} {
    /* top: 5px;
    left: 85%;

    padding: 7px; */

    font-size: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.brighterPink};
      cursor: pointer;
    }
  }
  @media${device.desktop15} {
    /* padding: 10px; */
  }
  @media${device.desktopHD} {
    /* top: 15px; */

    /* padding: 10px; */

    font-size: 1.5rem;
    margin-right: 2.5rem;
  }
  @media${device.desktop4k} {
    padding: 20px;
    font-size: 3rem;
  }
`;
