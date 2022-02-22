import styled from 'styled-components';
import { Field } from 'formik';
import { device } from '../../../constants/devices';

export const Input = styled(Field)`
  width: 100%;
  height: 50%;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : `1px solid ${theme.darkerGray}`};

  background: none;
  //! development
  /* background-color: red; */
  color: ${({ theme }) => theme.brighterGray};
  padding-top: 0.4rem;
  font-size: 0.8rem;
  outline: none;
  /* text-align: right; */

  transition: 0.4s;

  &::placeholder {
    color: ${({ theme }) => theme.darkerGray};
  }

  &:focus {
    border-bottom-color: ${({ theme }) => theme.brighterGray};
  }

  @media${device.mobileM} {
    font-size: 1rem;
  }

  @media${device.tabletM} {
    font-size: 1.4rem;
  }
  @media${device.laptop15} {
    font-size: 1rem;
  }
  @media${device.desktopHD} {
    font-size: 1.2rem;
  }
  @media${device.desktop4k} {
    font-size: 2.5rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  width: 90%;
  height: 10%;
  margin: 0.5rem 0 1rem 0;

  //!development
  /* background-color: rgba(200, 200, 200, 0.5); */
`;
