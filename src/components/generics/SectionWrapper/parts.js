import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;

  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ gradient }) => gradient};
`;
