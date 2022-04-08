import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const TextAreaField = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 150px;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : `1px solid ${theme.darkerGray}`};

  background: none;
  color: ${({ theme }) => theme.brighterGray};

  font-size: 0.8rem;
  font-family: 'Lato', 'sans-serif';
  letter-spacing: 1px;
  outline: none;

  transition: 0.4s;
  resize: none;

  border: 1px solid red;

  &::placeholder {
    color: ${({ theme }) => theme.darkerGray};
  }

  &:focus {
    border-bottom-color: ${({ theme }) => theme.brighterGray};
  }

  @media ${device.mobileM} {
    font-size: 1rem;
  }

  @media ${device.mobileL} {
    padding-top: 4rem;
    font-size: 2.8rem;
  }
  @media ${device.desktop} {
    font-size: 1rem;
  }
  @media ${device.desktopFHD} {
    font-size: 1.4rem;
  }
  @media ${device.desktop4k} {
    padding-top: 2rem;
    font-size: 2.2rem;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 55%;
`;
