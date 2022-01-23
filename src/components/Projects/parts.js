import styled from 'styled-components';
import { device } from '../../constants/devices';

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 50vh;
  height: 50vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media${device.tabletM} {
    width: 65vh;
    height: 65vh;
  }
  @media${device.desktop13} {
    width: 75vh;
    height: 75vh;
  }
  @media${device.desktopHD} {
    width: 80vh;
    height: 80vh;
    margin-top: 70px;
  }
`;

export const Wrapper = styled.div``;
