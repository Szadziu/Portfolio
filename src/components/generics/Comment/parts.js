import styled, { css } from 'styled-components';
import { device } from '../../../constants/devices';

const infoComment = css`
  position: absolute;
  left: -10px;
  bottom: 40px;

  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const Comment = styled.p`
  width: 100%;
  height: 2rem;
  /* height: 0.8rem; */
  /* align-self: flex-end; */
  /* margin: 5px 25px; */

  //! development
  /* background-color: beige; */

  color: ${({ error, theme }) => (error ? theme.pink : theme.green)};
  ${({ info }) => (info ? infoComment : null)};

  font-size: 0.6rem;

  @media${device.mobileM} {
    font-size: 0.8rem;
  }

  @media${device.tabletL} {
    /* margin: 10px 70px; */

    font-size: 1.4rem;
  }
  @media${device.desktop13} {
    /* margin: 10px 0px; */

    font-size: 0.7rem;
  }
  @media${device.desktopHD} {
    font-size: 1rem;
  }
  @media${device.desktop4k} {
    font-size: 2rem;
  }
`;
