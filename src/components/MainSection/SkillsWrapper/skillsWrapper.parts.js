import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../../constants/devices';
import slideArrow from '../../../assets/fast-forward.png';

export const SkillLabel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  writing-mode: vertical-lr;
  font-weight: 300;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.mint};
  color: ${({ theme }) => theme.white};
  padding: 10px 0;
  height: 100%;
  width: 45px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 4px;
  line-height: 45px;

  &::before {
    position: absolute;
    content: '';
    width: 30px;
    height: 30px;
    background-image: url(${slideArrow});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    top: 5%;
    left: 20px;
    z-index: 1;
    transition: 1s;
    transform: translateX(-50%)
      rotateY(${({ isSideMenuOpen }) => (isSideMenuOpen ? '0' : '180deg')});
  }
  @media ${device.mobileL} {
    display: none;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export const SkillContainer = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 60vh;
  max-height: 800px;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 0 5px 3px ${({ theme }) => theme.dimMint};
  padding: 10px 0;
  transition: 1s;
  transform: translateX(
    ${({ isSideMenuOpen }) => (isSideMenuOpen ? 0 : '85%')}
  );

  background-color: ${({ theme }) => theme.white};

  @media ${device.mobileL} {
    position: static;
    grid-area: 2/7/11/13;
    transform: translateX(0);
    width: 100%;
    height: 100%;
  }

  @media ${device.desktop} {
    width: 80%;
    justify-self: end;
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
`;
