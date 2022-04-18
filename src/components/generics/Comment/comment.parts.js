import styled, { css } from 'styled-components';
import { device } from '../../../constants/devices';

const infoComment = css`
  width: 90%;
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
`;

export const Comment = styled.p`
  width: 100%;
  height: 1.5rem;
  line-height: 1.2rem;

  color: ${({ error, theme }) => (error ? theme.pink : theme.green)};
  ${({ info }) => (info ? infoComment : null)};

  font-size: 1rem;
  font-weight: 300;

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;
