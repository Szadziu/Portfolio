import styled from "styled-components";

export const Button = styled.button`
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

  &:hover {
    color: #b9134f;
  }

  &::before {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    opacity: 1;
    content: "";
    background-color: skyblue;
    width: 0;
    height: 100%;
    transition: 0.3s;
    color: transparent;
  }
`;

export const Comment = styled.p`
  position: absolute;
  bottom: 0;
  margin: 10px 50px;
  align-self: flex-end;
  color: green;
  font-size: 0.8rem;
`;
