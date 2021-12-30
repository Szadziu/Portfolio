import styled from "styled-components";
import { device } from "../../constants/devices";

export const Container = styled.div`
  font-weight: 700;
  font-size: 24px;
  grid-area: 3/9/10/2;

  @media ${device.mobileS} {
    font-size: 12px;
  }

  @media ${device.mobileL} {
    font-size: 14px;
  }

  @media ${device.tabletM} {
    font-size: 22px;
  }

  @media ${device.tabletL} {
    font-size: 24px;
  }

  @media ${device.laptop13} {
    font-size: 26px;
  }

  @media ${device.desktopHD} {
    font-size: 36px;
  }

  @media ${device.desktop4k} {
    font-size: 64px;
  }
`;

export const Line = styled.span`
  position: relative;
  overflow: hidden;
  display: block;
  line-height: 1.2;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: black;

    animation: a-ltr-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
    transform: translateX(-101%);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation: a-ltr-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
    transform: translateX(0);
  }
  &:nth-of-type(1)::before,
  &:nth-of-type(1)::after {
    animation-delay: 1s;
  }

  &:nth-of-type(2)::before,
  &:nth-of-type(2)::after {
    animation-delay: 2s;
  }

  &:nth-of-type(3)::before,
  &:nth-of-type(3)::after {
    animation-delay: 3s;
  }

  &:nth-of-type(4)::before,
  &:nth-of-type(4)::after {
    animation-delay: 4s;
  }

  &:nth-of-type(5)::before,
  &:nth-of-type(5)::after {
    animation-delay: 5s;
  }

  &:nth-of-type(6)::before,
  &:nth-of-type(6)::after {
    animation-delay: 6s;
  }
  @keyframes a-ltr-after {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(101%);
    }
  }

  @keyframes a-ltr-before {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(200%);
    }
  }
`;
