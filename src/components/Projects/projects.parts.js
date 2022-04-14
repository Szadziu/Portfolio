import styled from 'styled-components';
import { device } from '../../constants/devices';

export const ProjectsWrapper = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%; */

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);

  /* gap: 10px; */

  justify-items: center;
  align-items: center;

  border: 1px solid black;

  grid-area: 2/2/12/12;

  /* display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center; */

  /* flex-wrap: wrap; */

  /* width: 100%; */
  /* height: 75%; */
  /* transform: translate(-50%, -50%); */

  @media ${device.mobileM} {
    /* justify-content: space-around; */
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.desktop} {
    grid-area: 2/3/11/11;
  }
  @media ${device.desktopFHD} {
    width: 80vh;
    height: 80vh;
    margin-top: 70px;
  }
  @media ${device.desktop4k} {
    width: 60vh;
    height: 60vh;
  }
`;
