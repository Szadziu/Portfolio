import styled, { css } from 'styled-components';
import { device } from '../../../constants/devices';

const infoComment = css`
  position: absolute;
  left: -10px;
  bottom: 40px;

  font-size: 0.8rem;
  text-transform: uppercase;

  @media${device.mobileM} {
    bottom: 70px;
  }
  @media${device.tabletL} {
    left: -40px;
    bottom: 120px;

    font-size: 1.2rem;
  }
  @media${device.desktop13} {
    left: 20px;
    bottom: 40px;

    font-size: 1.2rem;
  }
  @media${device.desktopHD} {
    left: 20px;
    bottom: 40px;

    font-size: 1.4rem;
  }
  @media${device.desktop4k} {
    left: 20px;
    bottom: 120px;

    font-size: 2rem;
  }
`;

export const Comment = styled.p`
  height: 0.8rem;
  align-self: flex-end;
  margin: 5px 25px;

  color: ${({ error, theme }) => (error ? theme.pink : theme.green)};
  ${({ info }) => (info ? infoComment : null)};

  font-size: 0.6rem;

  @media${device.mobileM} {
    font-size: 0.8rem;
  }
  @media${device.tabletM} {
    margin: 10px 50px;

    font-size: 1.2rem;
  }
  @media${device.tabletL} {
    margin: 10px 70px;

    font-size: 1.4rem;
  }
  @media${device.desktop13} {
    margin: 10px 0px;

    font-size: 1rem;
  }
  @media${device.desktopHD} {
    font-size: 1.4rem;
  }
  @media${device.desktop4k} {
    font-size: 2rem;
  }
`;
