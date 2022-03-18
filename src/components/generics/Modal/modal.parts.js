import styled from 'styled-components';
import closeBtn from '../../../assets/closeBtn.png';

export const Modal = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  text-align: center;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 30px;
  height: 30px;
  background-image: url(${closeBtn});
  background-size: contain;
  &:hover {
    cursor: pointer;
  }
`;
