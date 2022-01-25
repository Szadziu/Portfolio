import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const TextAreaField = styled.textarea`
  width: 90%;
  height: 60vw;
  padding: 10px;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : `1px solid ${theme.darkerGray}`};
  margin-left: 10px;

  background: none;
  color: ${({ theme }) => theme.brighterGray};

  font-size: 0.8rem;
  outline: none;

  transition: 0.4s;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.darkerGray};
  }

  &:focus {
    border-bottom-color: ${({ theme }) => theme.brighterGray};
  }

  @media${device.mobileM} {
    height: 65vw;

    font-size: 1rem;
  }
  @media${device.mobileL} {
    height: 50vw;
  }
  @media${device.tabletM} {
    height: 40vw;

    font-size: 1.4rem;
  }
  @media${device.tabletL} {
    font-size: 1.7rem;
  }
  @media${device.desktop13} {
    width: 100%;
    height: 10vw;

    font-size: 1.2rem;
  }
  @media${device.desktop13} {
    font-size: 1.6rem;
  }
  @media${device.desktop4k} {
    height: 33vh;

    margin-left: 5%;

    font-size: 3rem;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;
  height: 50%;
`;
