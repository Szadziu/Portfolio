import styled from "styled-components";
import crushSrc from "../../assets/crush.png";

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  height: 300px;
  width: 75px;
  border-radius: 15px;
  box-shadow: 0 0 3px 0 black;
  font-size: 30px;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  position: absolute;
  top: -50vh;
  left: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const CrushStamp = styled.img`
  background-image: url(${crushSrc});
  position: absolute;
  top: 70%;
  left: 0;
  height: 75px;
  width: 75px;
`;
