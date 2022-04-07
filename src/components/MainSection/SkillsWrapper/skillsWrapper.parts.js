import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  grid-area: 7/2/12/13;
  border-radius: 0.6rem 0 0 0.6rem;
  box-shadow: 0 0 5px 3px ${({ theme }) => theme.dimMint};
  padding: 10px 0;

  background-color: ${({ theme }) => theme.white};

  @media ${device.desktop} {
    grid-area: 2/8/12/13;
    padding-bottom: 1.2rem;
  }
`;

export const InfoIconLink = styled.button`
  align-self: flex-start;
  margin-right: 1rem;
  /* border: 1px solid red; */

  color: ${({ theme }) => theme.blue};

  font-size: 1rem;

  cursor: pointer;

  @media ${device.mobileM} {
    font-size: 1rem;
  }

  @media ${device.desktop} {
    transition: 0.2s;
    &:hover {
      color: ${({ theme }) => theme.brighterBlue};
      transform: rotate(90deg);
    }
    font-size: 1.5rem;
  }
  @media ${device.desktopFHD} {
    font-size: 1.4rem;
  }
  @media ${device.desktop4k} {
    font-size: 2.8rem;
  }
`;

export const SkillTitle = styled.p`
  width: 100%;

  text-align: left;
  font-size: 1rem;
  font-weight: 300;

  /* border: 1px solid blue; */

  @media ${device.mobileM} {
    /* font-size: 0.6rem; */
  }

  @media ${device.mobileL} {
    font-size: 2.4rem;
  }
  @media ${device.desktop} {
    font-size: 1.2rem;
  }
  @media ${device.desktopFHD} {
    font-size: 1.6rem;
  }
  @media ${device.desktop4k} {
    font-size: 2.5rem;
  }
`;

export const SkillAdvancementInfo = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  /* border: 1px dashed red; */

  font-size: 0.8rem;

  @media ${device.mobileL} {
    font-size: 2.4rem;
  }
  @media ${device.desktop} {
    font-size: 1.2rem;
  }
  @media ${device.desktopFHD} {
    font-size: 1.5rem;
  }
  @media ${device.desktop4k} {
    font-size: 2.5rem;
  }
`;
