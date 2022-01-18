import styled from 'styled-components';
import { device } from '../../../constants/devices';
import info from '../../../assets/info.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Bar = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media ${device.laptop13} {
    margin-bottom: 25px;
  }
`;

export const Boxes = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  gap: 5px;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 10px;
`;

export const BoxOfSkill = styled.div`
  border-radius: 3px;
  width: 30px;
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  transform: scale(0);
  box-shadow: 0 0 5px 2px black;

  @media ${device.mobileS} {
    width: 2px;
  }

  @media ${device.mobileL} {
    width: 5px;
  }

  @media ${device.tabletM} {
    width: 15px;
  }

  @media ${device.tabletL} {
    width: 20px;
  }

  @media ${device.laptop13} {
    width: 25px;
  }

  @media ${device.desktopHD} {
    width: 30px;
  }

  @media ${device.desktop4k} {
    width: 60px;
  }
`;

export const TitleOfSkill = styled.p`
  position: relative;
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  height: 10%;
  color: ${({ theme }) => theme.black};

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  @media ${device.mobileS} {
    font-size: 8px;

    &::after {
      display: none;
    }
  }

  @media ${device.mobileS} {
    font-size: 12px;
    margin-bottom: 50px;
  }
  @media ${device.mobileL} {
    margin-bottom: 30px;
  }

  @media (orientation: landscape) {
    margin-bottom: 30px;
    &::after {
      display: inline;
    }
  }

  @media ${device.tabletM} {
    font-size: 22px;
    margin-bottom: 70px;
  }

  @media ${device.desktop4k} {
    font-size: 42px;
    margin-bottom: 70px;

    &::after {
      width: 55px;
      height: 55px;
    }
  }
`;

export const InfoIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
