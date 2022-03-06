import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Bar = styled.div`
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  height: 18%;
  border-bottom: 2px solid ${({ theme }) => theme.black};
  padding-bottom: 5px;

  @media ${device.desktop13} {
    height: 20%;
  }
`;

export const Boxes = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 3px;
  width: 60%;
  height: 100%;

  @media ${device.tabletL} {
    gap: 6px;
  }
  @media ${device.desktopHD} {
    gap: 10px;
  }
  @media ${device.desktop4k} {
    gap: 20px;
  }
`;

export const BoxOfSkill = styled.div`
  width: 10px;
  height: ${({ height }) => height + 'px'};
  transform: scale(0);
  box-shadow: 0 0 0 0.5px ${({ theme }) => theme.black};

  background-color: ${({ color }) => color};

  @media ${device.mobileM} {
    width: 3px;
    height: ${({ height }) => height + 5 + 'px'};
  }
  @media ${device.tabletM} {
    width: 10px;
    height: ${({ height }) => height + 20 + 'px'};
  }
  @media ${device.tabletL} {
    width: 15px;
    height: ${({ height }) => height + 30 + 'px'};
  }
  @media ${device.desktop13} {
    width: 15px;
    height: ${({ height }) => height + 15 + 'px'};
  }
  @media ${device.desktop15} {
    width: 20px;
    height: ${({ height }) => height + 20 + 'px'};
  }
  @media ${device.desktopHD} {
    width: 25px;
    height: ${({ height }) => height + 30 + 'px'};
  }
  @media ${device.desktop4k} {
    width: 30px;
    height: ${({ height }) => height + 50 + 'px'};
  }
`;

export const TitleOfSkill = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 40%;
  height: 100%;

  color: ${({ theme }) => theme.black};

  font-size: 0.6rem;
  text-align: center;
`;
