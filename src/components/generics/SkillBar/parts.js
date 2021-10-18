import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 15%;
`;

export const Boxes = styled.div`
  color: white;
  width: 90%;
  /* height: 10%; */
  /* border: 3px solid ${(props) => props.theme.darkPurple};
  border-radius: 5px; */
  display: flex;
  position: relative;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  /* background-color: black; */
`;

export const BoxOfSkill = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  transform: scale(0);
`;

export const TitleOfSkill = styled.p`
  width: 90%;
  margin-bottom: 20px;
  /* height: 5%; */
  /* background-color: teal; */
  color: whitesmoke;
`;
