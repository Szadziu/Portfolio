import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const TextAreaField = styled.textarea`
  width: 100%;
  height: 90%;
  /* padding: 10px; */
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : `1px solid ${theme.darkerGray}`};
  /* margin-left: 10px; */

  background: none;
  //! development
  /* background-color: purple; */
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
    /* height: 65vw; */

    font-size: 1rem;
  }
  @media${device.mobileL} {
    /* height: 50vw; */
  }
  @media${device.tabletM} {
    /* height: 40vw; */

    font-size: 1.4rem;
  }
  @media${device.tabletL} {
    font-size: 1.7rem;
  }
  @media${device.desktop13} {
    /* width: 100%; */
    /* height: 10vw; */

    font-size: 1rem;
  }
  @media${device.desktopHD} {
    /* width: 100%; */
    /* height: 10vw; */

    font-size: 1.2rem;
  }
  @media${device.desktop4k} {
    /* height: 33vh; */

    /* margin-left: 5%; */
    padding-top: 20px;
    font-size: 2.5rem;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  width: 90%;
  height: 55%;

  //!development
  /* background-color: rgba(200, 200, 200, 0.5); */
`;
