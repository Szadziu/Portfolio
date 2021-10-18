import styled from "styled-components";

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
  /* background-color: black; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Quote = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  /* @import url('https://fonts.googleapis.com/css2?family=Ephesis&display=swap'); */
  /* font-family: 'Ephesis', cursive; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* background-color: white; */
  font-size: 48px;
  opacity: 0;
  color: whitesmoke;
  width: 650px;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
