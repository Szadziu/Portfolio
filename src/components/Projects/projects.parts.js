import styled from 'styled-components';
import { device } from '../../constants/devices';

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);

  justify-items: center;
  align-items: center;

  border: 1px solid black;

  grid-area: 2/2/12/12;

  @media ${device.mobileM} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.desktop} {
    grid-area: 2/3/11/11;
  }
`;
