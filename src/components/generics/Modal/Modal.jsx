import React, { useContext, useRef, forwardRef } from 'react';
import * as P from './modal.parts';
import { ProjectsContext } from '../../../contexts/ProjectsContext';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = () => {
  const { isModalOpen, setIsModalOpen, currentProject } =
    useContext(ProjectsContext);
  const modalRef = useRef();

  const closeModal = async () => {
    await gsap.to(modalRef.current, {
      duration: 0.5,
      scale: 0,
      opacity: 0.5,
      x: '50vw',
      y: '50vh',
    });
    setIsModalOpen(false);
    document.querySelector('body').style.overflow = 'auto';
  };

  return (
    <AnimatePresence>
      <P.Overlay onClick={closeModal}></P.Overlay>
      {isModalOpen && (
        <P.Modal
          as={motion.div}
          ref={modalRef}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          animate={{ opacity: 1, left: '50%' }}
          exit={{ opacity: 0 }}
        >
          {currentProject.name}
          <P.CloseButton onClick={closeModal} />
        </P.Modal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
