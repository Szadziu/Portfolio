import styled from 'styled-components';
import { Form } from 'formik';

export const Wrapper = styled.div`
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1000px;
  height: 70%;
  max-height: 700px;
  background-color: #3e3e3e;
  border-radius: 15px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

export const FormWrapper = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.span`
  position: relative;
  align-self: flex-start;
  color: #ea1d6f;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 30px 50px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 25px;
    height: 4px;
    background: #ea1d6f;
  }
`;

export const FormButton = styled.button`
  align-self: flex-end;
  margin-right: 10%;
  background: none;
  border: none;
  color: #ea1d6f;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 2vw;

  &::before {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    opacity: 1;
    width: 0;
    height: 100%;
    transition: 0.3s;
    color: transparent;
  }

  &:hover {
    color: #b9134f;
  }
`;
