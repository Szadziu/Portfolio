import styled from 'styled-components';

export const Title = styled.h1`
  grid-area: 1/3/2/11;
  align-self: center;
  border-top: 1.5px ${({ theme }) => theme.white} solid;
  border-bottom: 1.5px ${({ theme }) => theme.white} solid;

  text-align: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 300;
  color: ${({ theme }) => theme.white};
`;
