import React, { useContext, useRef } from 'react';
import * as P from './modal.parts';
import { ProjectsContext } from '../../../contexts/ProjectsContext';
import gsap from 'gsap';

const Modal = () => {
  const { setIsModalOpen } = useContext(ProjectsContext);
  const modalRef = useRef();

  const closeModal = async () => {
    await gsap.to(modalRef.current, {
      duration: 0.8,
      scale: 0,
      x: '50vw',
      y: '50vh',
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <P.Overlay onClick={closeModal}></P.Overlay>
      <P.Modal ref={modalRef}>
        <P.CloseButton onClick={closeModal} />
        Modal
      </P.Modal>
    </>
  );
};

export default Modal;
