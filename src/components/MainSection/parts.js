import styled from "styled-components";
import matrix from "../../assets/matrix.jpg";

export const MainSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  border-top: 5px solid white;
  border-bottom: 5px solid white;
  /* border-bottom: white 5px solid; */
  border-radius: 50px;
  /* opacity: 0.9; */
`;
