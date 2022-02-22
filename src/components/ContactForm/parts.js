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
  grid-area: 2/12/11/2;
  border-radius: 15px;

  background-color: ${({ theme }) => theme.darkGray};

  &:after {
    position: absolute;
    top: 0;
    left: 10px;
    right: 10px;
    bottom: 0;
    z-index: -1;

    display: block;
    border-radius: 15px;
    box-shadow: 0 20px 40px ${({ theme }) => theme.darkenedBackground};

    content: '';
  }

  @media${device.desktop13} {
    grid-area: 2/10/11/4;
  }
`;

export const FormWrapper = styled(Form)`
  /* position: relative; */

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: 15px;
`;

export const FormTitle = styled.span`
  position: relative;

  align-self: flex-start;
  margin: 1rem 0 2rem 0.5rem;
  height: 5%;
  /* padding: 10px 0; */
  color: ${({ theme }) => theme.pink};

  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  //! development
  /* background-color: yellow; */

  &:after {
    position: absolute;
    left: 0;
    /* bottom: -10px; */

    display: block;
    width: 25px;
    height: 4px;

    background: ${({ theme }) => theme.pink};

    content: '';
  }
  @media${device.mobileM} {
    font-size: 1.2rem;
  }
  @media${device.tabletM} {
    left: 10px;

    font-size: 2.2rem;
  }
  @media${device.tabletL} {
    margin: 30px 0;

    font-size: 2.6rem;
  }
  @media${device.desktop13} {
    font-size: 1.5rem;
  }
  @media${device.desktopHD} {
    font-size: 2rem;
    margin: 2rem 0 2rem 1rem;
  }
  @media${device.desktop4k} {
    font-size: 3.5rem;
    &:after {
      width: 70px;
      height: 10px;
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
  /* padding-bottom: 1rem; */
  /* margin: 0 10px; */

  color: ${({ theme }) => theme.gray};

  font-size: 0.43rem;
  /* align-items: center; */

  user-select: none;

  //!development
  /* background-color: rgba(200, 80, 80, 0.5); */

  @media${device.mobileM} {
    font-size: 0.8rem;
  }
  @media${device.mobileL} {
    font-size: 0.56rem;
  }
  @media${device.tabletM} {
    font-size: 1.05rem;
  }
  @media${device.desktop13} {
    /* padding-top: 10px; */

    font-size: 0.7rem;
  }

  @media${device.desktopHD} {
    /* padding-top: 40px; */

    font-size: 1.3rem;
  }
  @media${device.desktop4k} {
    /* padding-top: 130px; */

    font-size: 2rem;
  }
`;
