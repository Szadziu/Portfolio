import styled, { css } from 'styled-components';

const infoComment = css`
  position: absolute;
  bottom: 10px;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Comment = styled.p`
  height: 0.8rem;
  font-size: 0.8rem;
  margin: 10px;
  color: ${({ error, theme }) => (error ? theme.pink : theme.green)};
  ${({ info }) => (info ? infoComment : null)};
`;
