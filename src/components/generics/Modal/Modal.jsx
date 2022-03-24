import React, { useContext, useRef } from 'react';
import * as P from './modal.parts';
import { ProjectsContext } from '../../../contexts/ProjectsContext';
import gsap from 'gsap';

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ProjectsContext);
  const modalRef = useRef();

  const closeModal = async () => {
    await gsap.to(modalRef.current, {
      duration: 0.8,
      scale: 0,
      x: '50vw',
      y: '50vh',
    });
    setIsModalOpen(false);
    document.querySelector('body').style.overflow = 'auto';
  };

  return (
    <>
      <P.Overlay onClick={closeModal}></P.Overlay>
      {isModalOpen && (
        <P.Modal ref={modalRef}>
          <P.CloseButton onClick={closeModal} />
          Modal
        </P.Modal>
      )}
    </>
  );
};

export default Modal;
