import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  grid-area: 7/2/12/13;
  border-radius: 20px 0 0 20px;
  box-shadow: 0 0 5px 2px ${({ theme }) => theme.mint};
  padding-bottom: 10px;

  background-color: ${({ theme }) => theme.white};

  @media ${device.tabletS} {
    grid-area: 6/6/12/13;
  }
  @media ${device.desktop13} {
    grid-area: 2/8/12/13;
    padding-bottom: 20px;
  }
`;

export const InfoIconLink = styled.button`
  align-self: flex-start;
  margin-right: 1rem;

  color: ${({ theme }) => theme.blue};

  font-size: 0.7rem;

  cursor: pointer;

  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tabletM} {
    font-size: 1.2rem;
  }
  @media ${device.tabletL} {
    font-size: 2.4rem;
  }
  @media ${device.desktop13} {
    transition: 0.2s;
    &:hover {
      color: ${({ theme }) => theme.brighterBlue};
      transform: rotate(90deg);
    }
    font-size: 1.5rem;
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
  
  text-align: left;
  font-size: 0.7rem;
  font-weight: 700;

  @media ${device.mobileM} {
    font-size: 0.6rem;
  }
  @media ${device.tabletM} {
    font-size: 1rem;
    font-weight: 700;
  }
  @media ${device.tabletL} {
    font-size: 1.4rem;
  }
  @media ${device.desktop13} {
    font-size: 1.2rem;
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
  align-items: center;
  width: 100%;

  font-size: 0.8rem;

  @media ${device.tabletM} {
    font-size: 1.1rem;
  }
  @media ${device.tabletL} {
    font-size: 1.6rem;
  }
  @media ${device.desktop13} {
    font-size: 1.2rem;
  }
  @media ${device.desktopHD} {
    font-size: 1.5rem;
  }
  @media ${device.desktop4k} {
    font-size: 2.5rem;
  }
`;
