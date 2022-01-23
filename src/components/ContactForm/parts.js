import styled from 'styled-components';
import { Form } from 'formik';
import { device } from '../../constants/devices';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background-color: #3e3e3e;
  border-radius: 15px;
  grid-area: 2/12/11/2;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 10px;
    right: 10px;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

export const FormWrapper = styled(Form)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: 15px;
  flex-direction: column;
`;

export const FormTitle = styled.span`
  position: relative;
  align-self: flex-start;
  color: ${({ theme }) => theme.pink};
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 700;
  margin: 10px 0;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 25px;
    height: 4px;
    background: ${({ theme }) => theme.pink};
  }
  @media${device.mobileM} {
    font-size: 1.2rem;
  }
  @media${device.tabletM} {
    font-size: 2.2rem;
    left: 10px;
  }
  @media${device.tabletL} {
    margin: 30px 0;
    font-size: 2.6rem;
  }
  @media${device.desktop13} {
    font-size: 1.5rem;
  }
  @media${device.desktopHD} {
    font-size: 2.5rem;
  }
  @media${device.desktop4k} {
    font-size: 4.5rem;
    &:after {
      height: 10px;
      width: 90px;
    }
  }
`;

export const CooperateInfo = styled.p`
  /* align-self: flex-start; */
  font-size: 0.43rem;
  display: flex;
  align-items: center;
  width: 80%;
  height: 5%;
  margin: 0 10px;
  /* background: coral; */
  color: ${({ theme }) => theme.gray};
  user-select: none;

  @media${device.mobileM} {
    font-size: 0.8rem;
  }
  @media${device.mobileL} {
    font-size: 0.56rem;
  }
  @media${device.tabletM} {
    font-size: 1.05rem;
  }
  @media${device.tabletL} {
    font-size: 1.4rem;
  }
  @media${device.desktop13} {
    padding-top: 10px;
    font-size: 1rem;
  }
  @media${device.desktop15} {
    padding-top: 40px;
    font-size: 1.2rem;
  }
  @media${device.desktopHD} {
    padding-top: 0;
    font-size: 1.3rem;
  }
  @media${device.desktop4k} {
    padding-top: 130px;
    font-size: 2rem;
  }
`;
