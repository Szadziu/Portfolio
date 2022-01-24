import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Bar = styled.div`
  /* background-color: green; */
  position: relative;
  width: 80%;
  height: 18%;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 2px black solid;
  padding-bottom: 10px;
  @media ${device.desktop13} {
    height: 20%;
  }
`;

export const Boxes = styled.div`
  /* background-color: lightblue; */
  width: 60%;
  height: 100%;
  display: flex;
  gap: 5px;
  /* align-self: flex-end; */
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 5px;

  @media ${device.tabletL} {
    gap: 6px;
  }
  @media${device.desktopHD} {
    gap: 10px;
  }
  @media${device.desktop4k} {
    gap: 20px;
  }
`;

export const BoxOfSkill = styled.div`
  border-radius: 3px;
  width: 2px;
  height: ${({ height }) => height + 'px'};
  background-color: ${({ color }) => color};
  transform: scale(0);
  box-shadow: 0 0 2px 2px black;

  @media ${device.mobileM} {
    height: ${({ height }) => height + 5 + 'px'};
    width: 3px;
  }
  @media ${device.tabletM} {
    height: ${({ height }) => height + 20 + 'px'};
    width: 10px;
  }
  @media ${device.tabletL} {
    height: ${({ height }) => height + 30 + 'px'};
    width: 15px;
  }
  @media ${device.desktop13} {
    height: ${({ height }) => height + 15 + 'px'};
    width: 15px;
  }
  @media ${device.desktop15} {
    height: ${({ height }) => height + 20 + 'px'};
    width: 20px;
  }
  @media ${device.desktopHD} {
    height: ${({ height }) => height + 30 + 'px'};
    width: 25px;
  }
  @media ${device.desktop4k} {
    height: ${({ height }) => height + 50 + 'px'};
    width: 30px;
  }
`;

export const TitleOfSkill = styled.p`
  /* background-color: gray; */
  width: 40%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.black};
  font-size: 0.6rem;
`;
