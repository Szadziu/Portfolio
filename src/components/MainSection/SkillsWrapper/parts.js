import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const SkillContainer = styled.div`
  grid-area: 2/13/11/9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 20px 0 0 20px;
  box-shadow: 0 0 10px 3px ${({ theme }) => theme.mint};
  @media${device.desktop13} {
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
`;

export const InfoIconLink = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.blue};
  margin-right: 5px;
  align-self: flex-start;
  @media ${device.tabletM} {
    font-size: 1.1rem;
  }
  @media ${device.tabletL} {
    font-size: 1.5rem;
  }
  @media ${device.desktop13} {
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
  font-size: 0.8rem;
  @media ${device.tabletM} {
    font-size: 1.1rem;
    font-weight: 700;
  }
  @media ${device.tabletL} {
    font-size: 1.6rem;
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
  width: 100%;
  /* text-align: center; */
  display: flex;
  justify-content: space-around;
  font-size: 0.8rem;
  @media ${device.tabletM} {
    font-size: 1.2rem;
    font-weight: 700;
  }
  @media ${device.tabletL} or ${device.desktopHD} {
    font-size: 1.5rem;
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
