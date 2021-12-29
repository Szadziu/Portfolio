import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100vh;
  max-width: 2500px;
  background-color: ${(props) => props.bgColor};
  box-shadow: 0 0 12px 0 black;
  overflow: hidden;
  transition: 0.8s;
`;
