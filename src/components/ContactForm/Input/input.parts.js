import styled from 'styled-components';
import { Field } from 'formik';
import { device } from '../../../constants/devices';

export const Input = styled(Field)`
  width: 100%;
  height: 40%;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : `1px solid ${theme.darkerGray}`};
  padding-top: 5px;

  background: none;
  color: ${({ theme }) => theme.brighterGray};

  font-size: 1.2rem;
  font-family: 'Lato', 'sans-serif';
  letter-spacing: 1px;
  outline: none;

  transition: 0.4s;

  &::placeholder {
    color: ${({ theme }) => theme.darkerGray};
  }

  &:focus {
    border-bottom-color: ${({ theme }) => theme.brighterGray};
  }

  @media ${device.desktopFHD} {
    font-size: 1.4rem;
  }

  @media ${device.desktop4k} {
    font-size: 2.2rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 15%;
  margin-bottom: 1rem;
`;
