import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const QuoteParam = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 12/2/13/12;
  opacity: 0;
  padding: 1.25rem 0;

  color: ${({ theme }) => theme.pink};

  font-style: italic;
  font-weight: 300;
  font-size: 0.8rem;

  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tabletS} {
    font-size: 1.1rem;
  }
  @media ${device.tabletM} {
    margin-top: 0;

    font-size: 1.9rem;
  }
  @media ${device.tabletL} {
    font-size: 2.5rem;
  }
  @media ${device.mobileXL} {
    font-size: 3.2rem;
  }
  @media ${device.desktop13} {
    font-size: 1.7rem;
  }
  @media ${device.desktop15} {
    font-size: 1.8rem;
  }
  @media ${device.desktopHD} {
    font-size: 2.4rem;
  }
  @media ${device.desktop4k} {
    font-size: 3.7rem;
  }
`;
