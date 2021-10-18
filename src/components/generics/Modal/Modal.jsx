import * as P from "./parts";

const Modal = ({ closeModal, currentProject }) => {
  return (
    <>
      <P.OverlayWrapper onClick={closeModal}></P.OverlayWrapper>
      <P.ProjectModal>
        <P.Title>{currentProject.name}</P.Title>
        <P.CloseButton onClick={closeModal}>❌</P.CloseButton>
        <P.PhotoOfProject src={currentProject.img} />
        <P.ProjectDesc>{currentProject.desc}</P.ProjectDesc>
      </P.ProjectModal>
      ;
    </>
  );
};

export default Modal;
