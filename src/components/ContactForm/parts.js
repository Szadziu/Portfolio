import styled from "styled-components";
import { Field, Form } from "formik";

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
    content: "";
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
  flex-wrap: wrap;
`;

export const FormTitle = styled.span`
  position: relative;
  align-self: flex-start;
  color: #ea1d6f;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 30px 0 30px 30px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 25px;
    height: 4px;
    background: #ea1d6f;
  }
`;

export const Input = styled(Field)`
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
`;

export const FormButton = styled.button`
  align-self: flex-end;
  margin-top: 5%;
  margin-right: 10%;
  background: none;
  border: none;
  color: #ea1d6f;
  font-size: 14px;
  cursor: pointer;
  outline: none;

  &::before {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    opacity: 1;
    content: "✈️";
    background-color: skyblue;
    width: 0;
    height: 100%;
    transition: 0.3s;
    color: transparent;
  }

  &:hover {
    color: #b9134f;
  }
`;

export const FormTextArea = styled(Input)`
  margin-top: 5%;
  width: 90%;
  height: 50%;
  resize: none;
`;

export const Comment = styled.p`
  position: absolute;
  top: ${({ cords }) => cords.top}%;
  left: ${({ cords }) => cords.left}%;
  margin: 10px 30px;
  color: red;
  font-size: 0.6rem;
`;
