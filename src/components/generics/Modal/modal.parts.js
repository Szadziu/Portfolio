import styled from 'styled-components';
import closeBtn from '../../../assets/closeBtn.png';
import { motion } from 'framer-motion';

export const Modal = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  max-width: 380px;
  height: 70%;
  max-height: 500px;
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  z-index: 1;
  top: 50%;
  left: -50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.black};
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  overflow: hidden;
`;

export const ProjectTitle = styled.p`
  width: 80%;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  padding-bottom: 10px;
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
  width: 15px;
  height: 15px;
  background-image: url(${closeBtn});
  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.a`
  display: inline-block;
  background-image: url(${({ icon }) => icon});
  background-size: contain;
  width: 80px;
  height: 80px;
  margin: 0 auto 10px;
`;

export const ProjectDescription = styled.section`
  font-size: 1rem;
  hyphens: auto;
  text-align: justify;
  padding: 20px;
  padding-bottom: 40px;
  width: 100%;
  height: 50%;
  overflow: scroll;
`;
