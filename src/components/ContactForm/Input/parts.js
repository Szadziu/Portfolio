import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
  width: 90%;
  background: none;
  border: none;
  border-bottom: ${({ error, theme }) =>
    error ? `1px solid ${theme.pink}` : '1px solid #666'};
  color: #ddd;
  font-size: 1rem;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.4s;

  &::placeholder {
    color: #666;
  }

  &:focus {
    border-bottom-color: #ddd;
  }
`;

export const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
