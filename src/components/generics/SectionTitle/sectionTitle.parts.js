import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Title = styled.h1`
  display: inline;
  position: relative;
  grid-area: 1/5/2/7;
  align-self: center;
  margin: 1rem 0;

  text-align: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  /* font-size: 5rem; */

  color: transparent;
  /* background-color: black; */
  font-weight: 900;

  &:after {
    content: ${({ children }) => `"${children}"`};
    position: absolute;
    left: 0;
    top: 5px;
    color: black;
    clip-path: polygon(0 25%, 100% 65%, 100% 100%, 0% 100%);
  }

  &:before {
    content: ${({ children }) => `"${children}"`};
    position: absolute;
    color: black;
    clip-path: polygon(0 0, 110% 0, 100% 65%, 0 25%);
  }
`;
