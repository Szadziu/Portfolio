import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const QuoteParam = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: italic;
  font-size: 0.8rem;
  opacity: 0;
  /* background-color: coral; */
  grid-area: 11/9/12/2;
  color: ${({ theme }) => theme.pink};
`;
