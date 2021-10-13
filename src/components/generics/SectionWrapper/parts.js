import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: ${(props) => props.bgColor};
  transition: 500ms;
`;
