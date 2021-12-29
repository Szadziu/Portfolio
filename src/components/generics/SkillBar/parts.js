import styled from "styled-components";
import info from "../../../assets/info.png";

export const Bar = styled.div`
  width: 100%;
  height: 15%;
`;

export const Boxes = styled.div`
  width: 90%;
  display: flex;
  position: relative;
  gap: 5px;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const BoxOfSkill = styled.div`
  border-radius: 3px;
  width: 30px;
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  transform: scale(0);
  box-shadow: 0 0 5px 2px black;
`;

export const TitleOfSkill = styled.p`
  margin-bottom: 20px;
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
`;
