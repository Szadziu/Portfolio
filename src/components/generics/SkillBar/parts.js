import styled from 'styled-components';
import { device } from '../../../constants/devices';
import info from '../../../assets/info.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Bar = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  /* border: 2px solid black; */
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  /* background-color: coral; */
`;

export const Boxes = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  gap: 5px;
  align-items: flex-end;
  /* background-color: red; */
  justify-content: flex-end;
  border-bottom: 2px black solid;
  padding-bottom: 10px;
  /* margin-bottom: 10px; */
`;

export const BoxOfSkill = styled.div`
  border-radius: 3px;
  width: 5px;
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  transform: scale(0);
  box-shadow: 0 0 5px 2px black;
`;

export const TitleOfSkill = styled.p`
  /* background: yellow; */
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.black};
  font-size: 0.6rem;

  /* @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  } */
`;
export const InfoIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
