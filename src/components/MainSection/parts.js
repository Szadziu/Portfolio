import styled from "styled-components";
import matrix from "../../assets/matrix.jpg";

export const AnimationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 100%;
  height: 100%;
  background-color: black;
  background-image: url(${matrix});
  background-size: contain;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: white 5px solid;
  /* border-bottom: white 5px solid; */
  border-radius: 50px;
  /* opacity: 0.9; */
`;
