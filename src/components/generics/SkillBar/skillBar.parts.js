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
  padding-bottom: 0.3rem;

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

  @media ${device.tabletM} {
    gap: 0.3rem;
  }
  @media ${device.tabletL} {
    gap: 0.5rem;
  }
  @media ${device.mobileXL} {
    gap: 0.8rem;
    padding-bottom: 0.5rem;
  }
  @media ${device.desktopHD} {
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
    height: ${({ height }) => height + 10 + 'px'};
  }
  @media ${device.tabletM} {
    height: ${({ height }) => height + 20 + 'px'};
  }
  @media ${device.tabletL} {
    width: 1rem;
    height: ${({ height }) => height + 30 + 'px'};
  }
  @media ${device.mobileXL} {
    width: 1.4rem;

    height: ${({ height }) => height + 40 + 'px'};
  }
  @media ${device.desktop13} {
    height: ${({ height }) => height + 15 + 'px'};
  }
  @media ${device.desktop15} {
    width: 1.25rem;
    height: ${({ height }) => height + 20 + 'px'};
  }
  @media ${device.desktopHD} {
    width: 1.5rem;
    height: ${({ height }) => height + 30 + 'px'};
  }
  @media ${device.desktop4k} {
    width: 1.8rem;
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
