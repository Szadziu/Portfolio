import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => props.theme.landingSectionBackground};
  transition: 500ms;
  overflow: hidden;
`;
