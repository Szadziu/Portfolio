import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const QuoteParam = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: italic;
  font-size: 0.8rem;
  opacity: 0;
  margin-top: 20px;
  /* background-color: coral; */
  grid-area: 11/9/13/2;
  color: ${({ theme }) => theme.pink};

  @media ${device.mobileM} {
    font-size: 1.1rem;
  }
  @media ${device.tabletM} {
    margin-top: 0;
    font-size: 1.9rem;
  }
  @media ${device.tabletL} {
    font-size: 2.5rem;
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
