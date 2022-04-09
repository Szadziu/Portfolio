import styled from 'styled-components';
import { device } from '../../constants/devices';

export const ProjectsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  width: 100%;
  height: 75%;
  transform: translate(-50%, -50%);

  @media ${device.mobileM} {
    justify-content: space-around;
  }

  @media ${device.desktop} {
    width: 75vh;
    height: 75vh;
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

export const Wrapper = styled.div`
  background-color: pink;
`;
