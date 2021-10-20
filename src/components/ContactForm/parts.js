import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  margin-left: 30px;
  width: 240px;
  height: 40px;
  font-size: 1.2rem;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 45%;
  background-color: black;
  border: 15px solid grey;
  border-radius: 20px;
`;

export const FormTitle = styled.span`
  display: block;
  margin: 30px;
  color: whitesmoke;
  font-size: 1.7rem;
`;

export const FormButton = styled.button`
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 100px;
  height: 50px;
  border: none;
  background-color: white;
  color: ${(props) => props.theme.fontColor};
  transition: 0.3s;
  font-size: 1.2rem;

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
  width: 45%;
  height: 60%;
  bottom: 20%;
  right: 5%;
  background-color: black;
  resize: none;
  color: white;
`;

export const Comment = styled.p`
  position: absolute;
  top: ${(props) => props.cords.x}%;
  left: ${(props) => props.cords.y}%;
  margin: 10px 30px;
  color: red;
`;
