import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../../constants/devices';

export const SkillContainer = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* grid-area: 7/2/12/13; */
  width: 80vw;
  max-width: 500px;
  height: 80vh;
  max-height: 800px;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 0 5px 3px ${({ theme }) => theme.dimMint};
  padding: 10px 0;
  transition: 1s;
  transform: translateX(
    ${({ isSideMenuOpen }) => (isSideMenuOpen ? 0 : '85%')}
  );

  background-color: ${({ theme }) => theme.white};

  &::before {
    position: absolute;
    left: 10px;
    top: 70%;
    content: 'UMIEJĘTNOŚCI';
    writing-mode: vertical-lr;
    font-weight: 300;
    border: 1px solid black;
    padding: 10px 0;
    border-radius: 10px 0 0 10px;
    /* width: 10px; */
    /* height: 30px; */
    /* background-color: black; */
  }

  @media ${device.mobileM} {
    margin-top: 20px;
    /* padding: 20px 0; */
    grid-area: 7/2/12/13;
  }
  @media ${device.mobileL} {
    margin-top: 0;
    grid-area: 2/6/11/13;
  }

  @media ${device.desktop} {
    width: 75%;
    justify-self: end;
    /* grid-area: 2/8/12/13; */
    /* padding-bottom: 1.2rem; */
  }
`;

export const InfoIconLink = styled.button`
  align-self: flex-start;

  color: ${({ theme }) => theme.blue};

  font-size: 0.8rem;

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
  font-size: 0.8rem;
  font-weight: 300;

  @media ${device.mobileM} {
    font-size: 1rem;
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

  font-size: 0.8rem;

  @media ${device.mobileM} {
    font-size: 1rem;
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
