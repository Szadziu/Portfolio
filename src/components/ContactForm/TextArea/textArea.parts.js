import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const TextAreaField = styled.textarea`
  width: 100%;
  flex-grow: 1;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : `1px solid ${theme.darkerGray}`};

  background: none;
  color: ${({ theme }) => theme.brighterGray};

  font-size: 1.2rem;
  font-family: 'Lato', 'sans-serif';
  letter-spacing: 1px;
  outline: none;
  padding-top: 5px;

  transition: 0.4s;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.darkerGray};
  }

  &:focus {
    border-bottom-color: ${({ theme }) => theme.brighterGray};
  }

  @media ${device.desktopFHD} {
    font-size: 1.4rem;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 40%;
`;
