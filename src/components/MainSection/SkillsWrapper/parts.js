import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  grid-area: 2/13/11/9;
  border-radius: 20px 0 0 20px;
  box-shadow: 0 0 5px 2px ${({ theme }) => theme.mint};

  background-color: ${({ theme }) => theme.white};

  @media${device.desktop13} {
    flex-direction: row;
    flex-wrap: wrap;

    padding-bottom: 20px;
  }
`;

export const InfoIconLink = styled.button`
  align-self: flex-start;

  color: ${({ theme }) => theme.blue};

  font-size: 0.7rem;

  cursor: pointer;

  @media ${device.tabletM} {
    font-size: 1.1rem;
  }
  @media ${device.tabletL} {
    font-size: 1.2rem;
  }
  @media ${device.desktop13} {
    &:hover {
      color: ${({ theme }) => theme.brighterBlue};
    }
    font-size: 1rem;
  }
  @media ${device.desktopHD} {
    font-size: 1.4rem;
  }
  @media ${device.desktop4k} {
    font-size: 2.8rem;
  }
`;

export const SkillTitle = styled.p`
  width: 100%;

  font-size: 0.5rem;

  @media ${device.mobileM} {
    font-size: 0.6rem;
  }
  @media ${device.tabletM} {
    font-size: 1rem;
    font-weight: 700;
  }
  @media ${device.tabletL} {
    font-size: 1.1rem;
  }
  @media ${device.desktop13} {
    font-size: 0.9rem;
  }
  @media ${device.desktopHD} {
    font-size: 1.6rem;
  }
  @media ${device.desktop4k} {
    font-size: 2.5rem;
  }
`;

export const SkillAdvancementInfo = styled.p`
  display: flex;
  justify-content: space-around;
  width: 100%;

  font-size: 0.5rem;

  @media ${device.mobileM} {
    font-size: 0.6rem;
  }
  @media ${device.tabletM} {
    font-size: 0.8rem;
  }
  @media ${device.tabletL} {
    font-size: 0.9rem;
  }
  @media ${device.desktop13} {
    font-size: 1rem;
  }
  @media ${device.desktopHD} {
    font-size: 1.5rem;
  }
  @media ${device.desktop4k} {
    font-size: 2.5rem;
  }
`;
