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
  border: #fff 7px solid;
  border-radius: 160px 70px;
  color: transparent;
  background-repeat: no-repeat;
  transform-origin: left center;

  &:after {
    content: "";
    position: absolute;
    opacity: 0;
    top: -5px;
    left: -5px;
    width: 2px;
    height: 1px;
    border: #fff 5px solid;
  }
  &:hover {
    cursor: pointer;
  }
  /* display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  color: transparent;
  font-size: 30px;
  box-shadow: 0 0 30px 10px grey;
  border-radius: 50%;
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 0, 0, 0.8), rgb(0, 0, 255) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 0, 0.8), rgb(0, 50, 230) 70.71%); */
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
