import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Label = styled.label`
  /* position: relative; */
  height: 2rem;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  /* align-self: flex-start; */

  //! development
  /* background-color: cadetblue; */

  /* margin: 10px 10px 0 0; */

  color: ${({ theme }) => theme.mint};
  /* text-align: left; */
  /* margin-bottom: 0.5rem; */
  font-size: 0.7rem;

  @media${device.mobileM} {
    font-size: 1rem;
  }
  @media${device.tabletM} {
    /* margin-left: 10px; */

    font-size: 1.2rem;
  }
  @media${device.tabletL} {
    /* margin-left: 15px; */

    font-size: 1.5rem;
  }
  @media${device.desktop13} {
    font-size: 1rem;
  }
  @media${device.desktopHD} {
    /* margin-left: 10px; */

    font-size: 1.2rem;
  }
  @media${device.desktop4k} {
    /* margin-left: 5%; */

    font-size: 2.2rem;
  }
`;
