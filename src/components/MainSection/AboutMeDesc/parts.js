import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Container = styled.div`
  /* font-weight: 400; */
  font-size: 0.78rem;
  /* text-align: justify; */
  /* text-justify: inter-word; */
  margin-left: 20px;
  grid-area: 2/9/11/1;
  /* background-color: coral; */
`;

export const Line = styled.span`
  /* background-color: cadetblue; */
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
