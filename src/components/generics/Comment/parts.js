import styled, { css } from 'styled-components';

const infoComment = css`
  position: absolute;
  bottom: 20px;
  left: 0;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const Comment = styled.p`
  height: 0.8rem;
  font-size: 0.8rem;
  margin: 10px;
  color: ${({ error }) => (error ? 'red' : 'green')};
  ${({ info }) => (info ? infoComment : null)};
`;
