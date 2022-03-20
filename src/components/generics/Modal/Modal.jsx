import React, { useContext } from 'react';
import * as P from './modal.parts';
import { ProjectsContext } from '../../../contexts/ProjectsContext';

const Modal = () => {
  const { setIsModalOpen } = useContext(ProjectsContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <P.Overlay onClick={closeModal}></P.Overlay>
      <P.Modal>
        <P.CloseButton onClick={closeModal} />
        Modal
      </P.Modal>
    </>
  );
};

export default Modal;
