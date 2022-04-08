import styled from 'styled-components';

export const Title = styled.h1`
  grid-area: 1/3/2/11;
  align-self: center;
  border-top: 1.5px ${({ color }) => color} solid;
  border-bottom: 1.5px ${({ color }) => color} solid;

  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 5px 0;
  color: ${({ color }) => color};
`;
