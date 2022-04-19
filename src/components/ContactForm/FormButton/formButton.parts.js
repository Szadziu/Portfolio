import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Button = styled.button`
  align-self: flex-end;
  padding: 10px;
  margin-right: 5%;

  background-color: ${({ theme }) => theme.dimBackground};
  color: ${({ theme }) => theme.pink};

  font-weight: 700;
  font-size: 0.7rem;
  font-family: 'Lato', 'sans-serif';
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  @media ${device.mobileM} {
    font-size: 1rem;
  }

  @media ${device.mobileL} {
    padding: 15px;
    font-size: 1.2rem;
  }
  @media ${device.desktop} {
    &:hover {
      color: ${({ theme }) => theme.brighterPink};
      cursor: pointer;
    }
  }
  @media ${device.desktopFHD} {
    font-size: 1.5rem;
    margin-right: 2.5rem;
  }
`;
