import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Label = styled.label`
  height: 1.5rem;
  width: 100%;

  color: ${({ theme }) => theme.mint};

  font-size: 1rem;

  @media ${device.desktop} {
    font-size: 1rem;
  }

  @media ${device.desktopFHD} {
    font-size: 1.2rem;
  }
`;
