import styled from "styled-components";

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
  margin: 30px;
  color: whitesmoke;
  display: block;
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
  &:hover {
    background-color: grey;
    color: white;
    cursor: pointer;
  }
`;

export const FormTextArea = styled.textarea`
  position: absolute;
  bottom: 20%;
  right: 5%;
  background-color: pink;
  resize: none;
`;
