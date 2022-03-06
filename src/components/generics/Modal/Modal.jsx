import { useEffect, useRef, forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

import * as P from "./parts";

const Modal = forwardRef(({ closeModal, currentProject }) => {
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      photoAnimation();
    }, 1000);
  }, []);

  const photoAnimation = () => {
    const tl = gsap.timeline();
    tl.to(ref.current, { x: "+=20", rotation: 5 }).to(ref.current, {
      x: "-=20",
      rotation: -5,
    });
  };

  return (
    <>
      <P.OverlayWrapper onClick={closeModal}></P.OverlayWrapper>

      <P.ProjectModal>
        <P.Title>{currentProject.name}</P.Title>

        <P.CloseButton onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </P.CloseButton>
        <P.PhotoOfProject src={currentProject.img} />
        <P.ProjectDesc>
          <P.ProjectLink href={currentProject.link} target="_blank" ref={ref}>
            Link do projektu
          </P.ProjectLink>
          {currentProject.desc}
        </P.ProjectDesc>
      </P.ProjectModal>
    </>
  );
});
export default Modal;
