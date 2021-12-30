import styled from "styled-components";
import { Field } from "formik";

export const Wrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 70%;
  background-color: black;
  border: 15px solid grey;
  border-radius: 20px;
`;

export const FormTitle = styled.span`
  display: block;
  margin: 30px;
  color: whitesmoke;
  font-size: 0.8rem;
`;

export const Input = styled(Field)`
  display: block;
  margin: 30px 0 0 15px;
  width: 150px;
  height: 25px;
  font-size: 0.7rem;
`;

export const FormButton = styled.button`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 80px;
  height: 30px;
  border: none;
  background-color: white;
  color: ${({ theme }) => theme.fontColor};
  transition: 0.3s;
  font-size: 0.8rem;

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
    background-color: grey;
    color: transparent;
    cursor: pointer;
    &::before {
      width: 100%;
      color: white;
    }
  }
`;

export const FormTextArea = styled(Field)`
  position: absolute;
  width: 90%;
  height: 30%;
  bottom: 20%;
  right: 5%;
  background-color: white;
  padding: 15px;
  resize: none;
  color: black;
  font-size: 0.7rem;
`;

export const Comment = styled.p`
  position: absolute;
  top: ${({ cords }) => cords.top}%;
  left: ${({ cords }) => cords.left}%;
  margin: 10px 30px;
  color: red;
  font-size: 0.6rem;
`;
