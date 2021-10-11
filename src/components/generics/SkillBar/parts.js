import styled from "styled-components";

export const Bar = styled.div`
  color: white;
  width: 90%;
  height: 20%;
  border: 3px solid green;
  border-radius: 5px;
  display: flex;
  position: relative;
  gap: 5px;
  align-items: center;
  padding: 0 5px;
`;

export const BoxOfSkill = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.lightPurple};
`;

export const TitleOfSkill = styled.p`
  width: 50%;
  color: whitesmoke;
`;
