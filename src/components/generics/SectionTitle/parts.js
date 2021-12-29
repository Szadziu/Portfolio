import styled from "styled-components";

export const Title = styled.h1`
  width: 70%;
  height: 10%;
  text-align: center;
  text-transform: uppercase;
  margin: 20px auto;
  color: ${({ color }) => color};
  font-size: 58px;
  font-weight: 900;
  letter-spacing: -2px;
  transform: skew(30deg, 0deg) scaleY(0.667);
  grid-area: 1/6/3/1;
`;
