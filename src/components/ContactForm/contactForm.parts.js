import styled from 'styled-components';
import { Form } from 'formik';

import { device } from '../../constants/devices';

export const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  display: flex;
  justify-content: center;
  grid-area: 2/12/11/2;
  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.darkGray};

  border: 1px solid white;

  &:after {
    position: absolute;
    top: 0;
    left: 0.8rem;
    right: 0.8rem;
    bottom: 0;
    z-index: -1;

    display: block;
    border-radius: 0.6rem;
    box-shadow: 0 5px 10px ${({ theme }) => theme.dimBackground};

    content: '';
  }

  @media ${device.desktop} {
    grid-area: 2/10/11/4;
  }
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 100%;

  font-family: 'Lato', 'sans-serif';

  border: 1px solid orange;

  /* background-color: #fff; */
`;

export const FormTitle = styled.span`
  position: relative;

  align-self: flex-start;
  margin: 1rem 0;
  height: 5%;

  color: ${({ theme }) => theme.pink};

  font-size: 1.2rem;
  text-transform: uppercase;

  border: 1px solid teal;
  &:after {
    display: block;
    width: 1rem;
    height: 0.15rem;
    margin-top: 5px;

    background: ${({ theme }) => theme.pink};

    content: '';
  }
  @media ${device.mobileM} {
    font-size: 1.2rem;
  }
  @media ${device.mobileL} {
    margin-left: 2rem;
    font-size: 4rem;
  }
  @media ${device.desktop} {
    font-size: 1.5rem;
  }
  @media ${device.desktopFHD} {
    font-size: 2rem;
    margin: 2rem 0 2rem 1rem;
  }
  @media ${device.desktop4k} {
    font-size: 3.5rem;
    &:after {
      width: 4.3rem;
      height: 0.6rem;
    }
  }
`;

export const CooperateInfo = styled.p`
  display: flex;
  align-items: center;
  width: 80%;
  height: 10%;
  align-self: flex-start;
  margin-left: 5%;

  color: ${({ theme }) => theme.gray};

  font-size: 0.43rem;

  border: 1px solid coral;

  user-select: none;
  @media ${device.mobileM} {
    font-size: 0.8rem;
  }
  @media ${device.mobileL} {
    font-size: 0.55rem;
  }

  @media ${device.mobileL} {
    font-size: 1.8rem;
  }
  @media ${device.desktop} {
    font-size: 1rem;
  }
  @media ${device.desktopFHD} {
    font-size: 1.2rem;
  }
  @media ${device.desktop4k} {
    font-size: 1.4rem;
  }
`;
