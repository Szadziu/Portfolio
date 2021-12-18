import styled from "styled-components";
import matrix from "../../assets/matrix.jpg";

export const MainSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
  border-top: 5px solid gray;
  border-bottom: 5px solid gray;
  border-radius: 50px;
  padding-top: 30px;
`;

export const AboutMeDesc = styled.p`
  width: 50%;
  color: white;
  line-height: 48px;
  font-size: 28px;
`;
