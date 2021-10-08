import styled from "styled-components";
// import crushSrc from "../../assets/crush.png";

export const Button = styled.a`
  background-image: linear-gradient(#222 70%, red 100%);
  height: 300px;
  width: 75px;
  border-radius: 15px;
  box-shadow: 0 0 3px 0 black;
  color: whitesmoke;
  line-height: 75px;
  font-size: 30px;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  position: absolute;
  top: -50vh;
  left: 0;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 12px 2px goldenrod;
  }
`;

// export const CrushStamp = styled.img`
//   background-image: url(${crushSrc});
//   position: absolute;
//   top: 70%;
//   left: 0;
//   height: 75px;
//   width: 75px;
// `;
