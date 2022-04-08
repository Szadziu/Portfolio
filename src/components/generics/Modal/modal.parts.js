import styled from 'styled-components';
import closeBtn from '../../../assets/closeBtn.png';
import { motion } from 'framer-motion';

export const Modal = styled(motion.div)`
  width: 80%;
  max-width: 500px;
  height: 50%;
  max-height: 500px;
  background-color: red;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: -50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1rem;
  text-align: center;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background-image: url(${closeBtn});
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`;
