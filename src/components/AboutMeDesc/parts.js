import styled from "styled-components";
import sign from "../../assets/sign.png";

export const Container = styled.div`
  font-weight: 700;
  font-size: 32px;
  grid-area: 3/9/10/2;
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
    /* background: rgba(255, 239, 181, 1); */
    /* background-image: url(${sign});
    background-size: contain; */
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
