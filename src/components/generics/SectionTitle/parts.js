import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: ${({ color }) => color};
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -2px;
  /* transform: skew(30deg, 0deg) scaleY(0.667); */
  grid-area: 1/9/2/1;
`;
