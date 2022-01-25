import styled from 'styled-components';
import { Field } from 'formik';
import { device } from '../../../constants/devices';

export const Input = styled(Field)`
  width: 90%;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : `1px solid ${theme.darkerGray}`};
  margin: 5px 0 0 10px;

  background: none;
  color: ${({ theme }) => theme.brighterGray};

  font-size: 0.8rem;
  outline: none;
  text-align: right;

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
  @media${device.tabletL} {
    font-size: 1.7rem;
  }
  @media${device.desktop13} {
    width: 100%;

    font-size: 1.2rem;
  }
  @media${device.desktopHD} {
    font-size: 1.6rem;
  }
  @media${device.desktop4k} {
    margin-left: 5%;

    font-size: 3rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
`;
