import styled from 'styled-components';
import { device } from '../../constants/devices';

export const ProjectsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  justify-content: space-around;

  flex-wrap: wrap;
  width: 50vh;
  height: 50vh;
  transform: translate(-50%, -50%);

  @media ${device.mobileM} {
    width:45vh;
    height: 45vh;
  }
  @media ${device.mobileL} {
    width:55vh;
    height: 55vh;
  }
  @media ${device.tabletS} {
    width: 70vh;
    height: 70vh;
  }
  @media ${device.desktop13} {
    width: 75vh;
    height: 75vh;
  }
  @media ${device.desktopHD} {
    width: 80vh;
    height: 80vh;
    margin-top: 70px;
  }
`;

export const Wrapper = styled.div``;
