import styled from "styled-components";

export const Img = styled.img`
  margin-left: 10px;
  width: auto;
  height: 40px;
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    transform: scale(1.7);
  }
`;

export const Banner = styled.div`
  position: absolute;
  top: 80vh;
  left: -15vw;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  height: 10vh;
`;
