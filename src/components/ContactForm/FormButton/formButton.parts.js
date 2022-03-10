import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Button = styled.button`
  align-self: flex-end;
  border-radius: 0.6rem;
  padding: 0.6rem;
  margin-right: 1rem;

  background-color: ${({ theme }) => theme.dimBackground};
  color: ${({ theme }) => theme.pink};

  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tabletM} {
    font-size: 1.4rem;
  }
  @media ${device.tabletL} {
    font-size: 1.9rem;
  }
  @media ${device.mobileXL} {
    margin-right: 5rem;
    padding: 1.5rem;
    font-size: 2.8rem;
  }
  @media ${device.desktop13} {
    font-size: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.brighterPink};
      cursor: pointer;
    }
  }
  @media ${device.desktopHD} {
    font-size: 1.5rem;
    margin-right: 2.5rem;
  }
  @media ${device.desktop4k} {
    padding: 1.2rem;
    font-size: 3rem;
  }
`;
