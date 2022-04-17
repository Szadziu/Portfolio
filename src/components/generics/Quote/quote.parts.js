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
  font-size: 1rem;

  @media ${device.mobileM} {
    font-size: 1.2rem;
  }

  @media ${device.desktop} {
    font-size: 1.7rem;
  }
  @media ${device.desktop4k} {
    font-size: 3.7rem;
  }
`;
