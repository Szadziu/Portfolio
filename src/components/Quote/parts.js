import styled from "styled-components";
import { device } from "../../constants/devices";

export const QuoteParam = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: italic;
  font-size: 34px;
  opacity: 0;
  grid-area: 10/5/12/2;

  @media ${device.mobileS} {
    font-size: 14px;
    grid-area: 11/8/12/2;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }

  @media ${device.tabletM} {
    font-size: 28px;
  }

  @media ${device.tabletL} {
    font-size: 32px;
  }

  @media ${device.laptop13} {
    font-size: 36px;
  }

  @media ${device.desktop4k} {
    font-size: 56px;
  }
`;
