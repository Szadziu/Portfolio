import styled from 'styled-components';
import { device } from '../../constants/devices';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  grid-area: 2/13/12/6;
`;

export const BackgroundPhoto = styled.div`
  position: absolute;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: 112.5vh 150vh;
  background-position: -56.25vh 0;
  width: 100%;
  height: 100%;
`;

export const Workplace = styled.span`
  position: relative;
  top: 20px;
  z-index: 1;
  grid-area: 1/8/2/12;

  display: inline-block;
  width: 100px;
  height: 65px;
  padding-bottom: 5px;
  border-bottom: ${({ theme }) => theme.black} 2px solid;

  color: ${({ theme }) => theme.black};

  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;

  @media ${device.mobileM} {
    font-size: 1.2rem;
    width: 120px;
    height: 80px;
    grid-area: 1/10/2/13;
  }

  @media ${device.desktop} {
    top: 10px;
  }
`;
