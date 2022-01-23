import styled from 'styled-components';
import { Field } from 'formik';
import { device } from '../../../constants/devices';

export const Input = styled(Field)`
  width: 90%;
  background: none;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : '1px solid #666'};
  color: #ddd;
  font-size: 0.8rem;
  outline: none;
  transition: border-color 0.4s;
  margin: 5px 0 0 10px;
  text-align: right;

  &::placeholder {
    color: #666;
  }

  &:focus {
    border-bottom-color: #ddd;
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
    font-size: 1.2rem;
    width: 100%;
  }
  @media${device.desktopHD} {
    font-size: 1.6rem;
  }
  @media${device.desktop4k} {
    font-size: 3rem;
    margin-left: 5%;
  }
`;

export const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;
