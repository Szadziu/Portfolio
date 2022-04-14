import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Bar = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 40px;
  border-bottom: 2px solid ${({ theme }) => theme.black};

  @media ${device.desktop} {
    height: 20%;
  }
`;

export const Boxes = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
  width: 60%;
  height: 100%;
  padding-bottom: 5px;

  @media ${device.mobileL} {
    gap: 10px;
  }
  @media ${device.desktopFHD} {
    gap: 0.6rem;
  }
  @media ${device.desktop4k} {
    gap: 1.2rem;
  }
`;

export const BoxOfSkill = styled.div`
  width: 0.6rem;
  height: ${({ height }) => height + 'px'};
  transform: scale(0);
  box-shadow: 0 0 0 0.5px ${({ theme }) => theme.black};

  background-color: ${({ color }) => color};

  @media ${device.mobileM} {
    width: 0.8rem;
    height: ${({ height }) => height + 10 + 'px'};
  }

  @media ${device.mobileL} {
    width: 1rem;
    height: ${({ height }) => height + 15 + 'px'};
  }

  @media ${device.desktopFHD} {
    width: 1.5rem;
    height: ${({ height }) => height + 30 + 'px'};
  }

  @media ${device.desktop4k} {
    width: 1.8rem;
    height: ${({ height }) => height + 50 + 'px'};
  }
`;

export const InfoOfSkill = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 40%;
  height: 100%;

  color: ${({ theme }) => theme.black};
`;
