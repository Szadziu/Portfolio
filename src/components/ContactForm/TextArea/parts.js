import styled from 'styled-components';
import { device } from '../../../constants/devices';
import { Field } from 'formik';
import { Input } from '../Input/parts';

export const TextAreaField = styled.textarea`
  width: 90%;
  height: 60vw;
  padding: 10px;
  background: none;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : '1px solid #666'};
  color: #ddd;
  font-size: 0.8rem;
  outline: none;
  transition: border-color 0.2s;
  margin-left: 10px;

  &::placeholder {
    color: #666;
  }

  &:focus {
    border-bottom-color: #ddd;
  }
  resize: none;

  @media${device.mobileM} {
    font-size: 1rem;
    height: 65vw;
  }
  @media${device.mobileL} {
    height: 50vw;
  }
  @media${device.tabletM} {
    font-size: 1.4rem;
    height: 40vw;
  }
  @media${device.tabletL} {
    font-size: 1.7rem;
  }
  @media${device.desktop13} {
    font-size: 1.2rem;
    height: 10vw;
    width: 100%;
  }
  @media${device.desktop13} {
    font-size: 1.6rem;
  }
  @media${device.desktop4k} {
    font-size: 3rem;
    margin-left: 5%;
    height: 33vh;
  }
`;

export const TextAreaWrapper = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
