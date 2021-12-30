import styled from "styled-components";
import { device } from "../../../constants/devices";

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: ${({ color }) => color};
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -2px;
  grid-area: 1/9/2/1;

  @media ${device.mobileS} {
    font-size: 18px;
  }

  @media ${device.tabletM} {
    font-size: 36px;
  }

  @media ${device.desktopHD} {
    font-size: 42px;
  }

  @media ${device.desktop4k} {
    font-size: 84px;
  }
`;
