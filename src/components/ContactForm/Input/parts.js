import styled from 'styled-components';
import { Field } from 'formik';
import { device } from '../../../constants/devices';

export const Input = styled(Field)`
  width: 100%;
  height: 50%;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : `1px solid ${theme.darkerGray}`};
  padding-top: 0.4rem;

  background: none;
  color: ${({ theme }) => theme.brighterGray};
  
  font-size: 0.8rem;
  outline: none;
  
  transition: 0.4s;

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
   padding-bottom: 0.4rem;
   font-size: 0.7rem;
  }
  @media ${device.tabletM} {
    font-size: 1.2rem;
  }
  @media ${device.tabletL} {
    font-size: 1.4rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 10%;
  margin: 0.5rem 0 1rem 0;
`;
