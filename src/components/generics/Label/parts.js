import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-top: 10px;
  align-items: center;
  align-self: flex-start;
  color: ${({ theme }) => theme.mint};
  /* background-color: yellow; */
  font-size: 0.7rem;
  @media${device.mobileM} {
    font-size: 1rem;
  }
  @media${device.tabletM} {
    font-size: 1.2rem;
    margin-left: 10px;
  }
  @media${device.tabletL} {
    font-size: 1.5rem;
    margin-left: 15px;
  }
  @media${device.desktop13} {
    font-size: 1.1rem;
    margin-left: 15px;
  }
  @media${device.desktopHD} {
    font-size: 1.4rem;
    margin-left: 10px;
  }
  @media${device.desktop4k} {
    font-size: 2rem;
    margin-left: 5%;
  }
`;
