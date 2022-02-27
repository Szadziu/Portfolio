import styled, { css } from 'styled-components';
import { device } from '../../../constants/devices';

const infoComment = css`
  margin-left: 3rem;
 
  font-size: 2rem;
  text-transform: uppercase;

  @media ${device.tabletM} {
    font-size: 3rem;
  }
`;

export const Comment = styled.p`
  width: 100%;
  height: 2rem;

  color: ${({ error, theme }) => (error ? theme.pink : theme.green)};
  ${({ info }) => (info ? infoComment : null)};

  font-size: 0.6rem;

  @media ${device.mobileM} {
    font-size: 0.8rem;
  }
  @media ${device.tabletL} {
    font-size: 1.4rem;
  }
  @media ${device.desktop13} {
    font-size: 0.7rem;
  }
  @media ${device.desktopHD} {
    font-size: 1rem;
  }
  @media ${device.desktop4k} {
    font-size: 2rem;
  }
`;
