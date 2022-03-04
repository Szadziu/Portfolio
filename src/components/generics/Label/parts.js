import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Label = styled.label`
  height: 2rem;

  color: ${({ theme }) => theme.mint};
  
  font-size: 0.7rem;

  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tabletM} {
    font-size: 1.2rem;
  }
  @media ${device.tabletL} {
    font-size: 1.5rem;
  }
  @media ${device.desktop13} {
    font-size: 1rem;
  }
  @media ${device.desktopHD} {
    font-size: 1.2rem;
  }
  @media ${device.desktop4k} {
    font-size: 2.2rem;
  }
`;
