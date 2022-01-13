import { Field } from 'formik';
import styled from 'styled-components';
import { Input } from '../Input/parts';

export const TextAreaField = styled.textarea`
  width: 90%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 1rem;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: #666;
  }

  &:focus {
    border-bottom-color: #ddd;
  }
  margin-top: 5%;
  width: 90%;
  height: 70%;
  resize: none;
`;
