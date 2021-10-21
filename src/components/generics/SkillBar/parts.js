import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 15%;
`;

export const Boxes = styled.div`
  color: white;
  width: 90%;
  display: flex;
  position: relative;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
`;

export const BoxOfSkill = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  transform: scale(0);
`;

export const TitleOfSkill = styled.p`
  width: 90%;
  margin-bottom: 20px;
  color: whitesmoke;
`;
