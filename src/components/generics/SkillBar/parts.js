import styled from "styled-components";

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
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    gap: 15px;
  }
`;

export const BoxOfSkill = styled.div`
  border-radius: 3px;
  width: 30px;
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  transform: scale(0);
`;

export const TitleOfSkill = styled.p`
  width: 90%;
  margin-bottom: 20px;
  color: whitesmoke;
`;
