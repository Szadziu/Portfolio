import { useState, useInView, useEffect, useRef } from "react";
import gsap from "gsap";
import * as P from "./parts";

const Modal = ({ closeModal, currentProject }) => {
  const [imageDisplay, setImageDisplay] = useState(false);
  const ref = useRef();
  // const [ref, inView, entry] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     console.log("ok");
  //   }
  // }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setImageDisplay(true);
      photoAnimation();
    }, 1000);
  }, []);

  const photoAnimation = () => {
    gsap.to(ref.current, { scale: 2, stagger: 0.5 });
  };

  return (
    <>
      <P.OverlayWrapper onClick={closeModal}></P.OverlayWrapper>
      <P.ProjectModal

      // onLoad={}
      >
        <P.Title>{currentProject.name}</P.Title>
        <P.CloseButton onClick={closeModal}>❌</P.CloseButton>
        <a href={currentProject.link} ref={ref}>
          <P.PhotoOfProject src={currentProject.img} />
        </a>

        <P.ProjectDesc>{currentProject.desc}</P.ProjectDesc>
      </P.ProjectModal>
      ;
    </>
  );
};

export default Modal;
