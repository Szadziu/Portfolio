import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Container = styled.div`
  grid-area: 2/2/12/11;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.brighterGray};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.darkerGray};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.darkGray};
  }

  font-size: 0.85rem;
  font-weight: 300;
  text-align: justify;
  hyphens: auto;
  padding: 0 10px;

  @media ${device.mobileM} {
    font-size: 1.05rem;
  }

  @media ${device.mobileL} {
    grid-area: 2/1/12/7;
    margin: 0 20px;
  }

  @media ${device.desktop} {
    grid-area: 2/1/12/8;
    font-size: 1.3rem;
  }
  @media ${device.desktopFHD} {
    font-size: 1.9rem;
  }
`;

export const Line = styled.span`
  position: relative;

  display: none;
  overflow: hidden;

  color: ${({ theme }) => theme.white};

  line-height: 1.5;

  @media ${device.desktop} {
    line-height: 1.8;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;
    transform: translateX(-101%);

    background: ${({ theme }) => theme.white};

    animation: a-ltr-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
    content: '';
  }
  &::before {
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;
    transform: translateX(0);

    background: ${({ theme }) => theme.gray};

    animation: a-ltr-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
    content: '';
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
