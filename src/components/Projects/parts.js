import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 50vh;
  height: 50vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (orientation: landscape) {
    margin: 5vh 0;
    width: 40vw;
    height: 40vw;
  }
`;

export const Wrapper = styled.div``;
