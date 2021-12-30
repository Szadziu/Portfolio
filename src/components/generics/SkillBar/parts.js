import styled from "styled-components";
import { device } from "../../../constants/devices";
import info from "../../../assets/info.png";

export const Bar = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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
`;

export const TitleOfSkill = styled.p`
  margin-bottom: 30px;
  /* background: red; */
  width: 100%;
  height: 10%;
  &::after {
    position: absolute;
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url(${info});
    background-size: contain;
    margin-left: 10px;
    animation: pulse 2s infinite;
  }
  &:hover::after {
    cursor: pointer;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.75);
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
`;
