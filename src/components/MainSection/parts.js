import styled from "styled-components";
import fingerPrint from "../../assets/fingerprint.png";

export const MainSectionWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 30px;
`;

export const Background = styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  bottom: 0;
  right: 0;
  /* opacity: 0.2; */
  /* background-image: url(${fingerPrint});
  background-position: center;
  background-size: contain;
  background-attachment: fixed;
  background-repeat: no-repeat; */
`;
