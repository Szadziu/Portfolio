import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vh;
  height: 50vh;
  position: absolute;
  top: 45%;
  left: 50%;
  gap: 10px;
  transform: translate(-50%, -50%);

  @media (orientation: landscape) {
    margin-top: 10vh;
    width: 50vw;
    height: 50vw;
  }
`;
