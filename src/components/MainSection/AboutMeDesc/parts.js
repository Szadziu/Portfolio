import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Container = styled.div`
  font-size: 0.78rem;
  margin: 0 10px 0 20px;
  grid-area: 2/9/11/1;
  /* background-color: coral; */

  @media ${device.mobileM} {
    font-size: 0.95rem;
  }
  @media${device.tabletM} {
    font-size: 1.55rem;
  }
  @media${device.tabletL} {
    font-size: 2.05rem;
  }
  @media${device.desktop13} {
    font-size: 1.45rem;
    margin-top: 40px;
  }
  @media${device.desktopHD} {
    font-size: 2.3rem;
    margin-top: 60px;
  }
  @media${device.desktop4k} {
    font-size: 3.8rem;
    margin-top: 80px;
  }
`;

export const Line = styled.span`
  position: relative;
  overflow: hidden;
  display: none;
  line-height: 1.2;
  color: ${({ theme }) => theme.white};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.white};

    animation: a-ltr-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
    transform: translateX(-101%);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gray};
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
