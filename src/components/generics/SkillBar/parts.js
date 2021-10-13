import styled from "styled-components";

export const Bar = styled.div`
  color: white;
  width: 25%;
  height: 12%;
  /* border: 3px solid ${(props) => props.theme.darkPurple};
  border-radius: 5px; */
  display: flex;
  position: relative;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 5px;
  opacity: 0;
`;

export const BoxOfSkill = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
`;

export const TitleOfSkill = styled.p`
  width: 25%;
  margin: 10px 0;
  /* background-color: teal; */
  color: whitesmoke;
`;
