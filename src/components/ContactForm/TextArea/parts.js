import styled from 'styled-components';
import { Field } from 'formik';
import { Input } from '../Input/parts';

export const TextAreaField = styled.textarea`
  position: absolute;
  left: 10%;
  width: 90%;
  height: 30vh;
  padding: 50px 0;
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
  resize: none;
`;

export const TextAreaWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
