import styled from "styled-components";

export const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  top: 0;
  left: 31vw;
  width: 2px;
  height: 1px;
  border-radius: 15px;
  box-shadow: 0 0 3px 0 black;
  color: transparent;
  background-image: url(${({ image }) => image});
  background-size: 200px;
  background-repeat: no-repeat;
  transform-origin: left center;

  &:hover {
    cursor: pointer;
  }
`;

export const WaterDrop = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  top: 30px;
  left: 35vw;
  background: #fff;
  border-radius: 20px;
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 30px solid rgba(255, 255, 255, 1);
    top: -22px;
  }
`;
