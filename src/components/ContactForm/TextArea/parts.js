import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const TextAreaField = styled.textarea`
  width: 100%;
  height: 90%;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : `1px solid ${theme.darkerGray}`};

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

  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tabletS} {
    font-size: 0.7rem;
  }
  @media ${device.tabletM} {
    font-size: 1.2rem;
  }
  @media ${device.tabletL} {
    font-size: 1.4rem;
  }
  @media ${device.desktop13} {
    font-size: 1rem;
  }
  @media ${device.desktopHD} {
    font-size: 1.2rem;
  }
  @media ${device.desktop4k} {
    padding-top: 20px;
    font-size: 2.5rem;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 55%;
`;
