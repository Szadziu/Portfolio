import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Title = styled.h1`
  grid-area: 1/3/2/11;

  justify-self: center;
  width: 100%;

  border-width: 1.5px 0;
  border-style: solid;
  border-color: ${({ color }) => color};
  margin: 20px 0 15px;
  padding: 5px 0;

  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;

  color: ${({ color }) => color};

  @media ${device.mobileM} {
    width: 90%;
    font-size: 1.5rem;
  }

  @media ${device.mobileL} {
    width: 60%;
  }

  @media ${device.desktop} {
    font-size: 2rem;
  }
`;
