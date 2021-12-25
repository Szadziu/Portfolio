import * as P from "./parts";

const Modal = ({ closeModal, currentProject }) => {
  const triggerLinkProject = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <P.OverlayWrapper onClick={closeModal}></P.OverlayWrapper>
      <P.ProjectModal>
        <P.Title>{currentProject.name}</P.Title>
        <P.CloseButton onClick={closeModal}>❌</P.CloseButton>
        <P.PhotoOfProject
          onLoad={setTimeout(() => {
            console.log("wczytało się");
          }, 1000)}
          onClick={() => triggerLinkProject(currentProject.link)}
          src={currentProject.img}
        />
        <P.ProjectDesc>{currentProject.desc}</P.ProjectDesc>
      </P.ProjectModal>
      ;
    </>
  );
};

export default Modal;
