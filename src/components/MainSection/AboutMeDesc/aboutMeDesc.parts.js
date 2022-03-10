import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Container = styled.div`
  grid-area: 2/2/7/12;
 
  margin: 0 0.6rem 0 1.2rem;

  font-size: 0.55rem;

@media ${device.mobileM} {
  font-size: 0.7rem;
}
@media ${device.tabletS} {
  font-size: 0.6rem;
}
@media ${device.tabletM} {
  font-size: 1rem;
}
@media ${device.tabletL} {
  font-size: 1.3rem;
}
@media ${device.mobileXL} {
  font-size: 2.1rem;
}
@media ${device.desktop13} {
  grid-area:2/2/12/8;
  font-size: 1.3rem;
}
@media ${device.desktopHD} {
  margin: 3.6rem 1.2rem 0 0;
  font-size: 1.8rem;
}
@media ${device.desktop4k} {
  margin-top: 4.8rem;

  font-size: 2.5rem;
}
`;

export const Line = styled.span`
  position: relative;

  display: none;
  overflow: hidden;

  color: ${({ theme }) => theme.white};

  line-height: 1.8;

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
  @media ${device.desktopHD} {
    margin-left: 1.2rem;
  }
`;
