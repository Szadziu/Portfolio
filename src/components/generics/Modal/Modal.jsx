import { useState, useInView, useEffect, useRef } from "react";
import gsap from "gsap";
import * as P from "./parts";

const Modal = ({ closeModal, currentProject }) => {
  const [imageDisplay, setImageDisplay] = useState(false);
  // const [ref, inView, entry] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     console.log("ok");
  //   }
  // }, [inView]);

  const photoAnimation = (image) => {
    gsap.to(image.target, { scale: 2, stagger: 0.5 });
  };

  const triggerLinkProject = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <P.OverlayWrapper onClick={closeModal}></P.OverlayWrapper>
      <P.ProjectModal
        // ref={ref}
        onLoad={setTimeout(() => {
          // const imageRef = entry.current;
          setImageDisplay(true);
          // photoAnimation(imageRef);
        }, 1000)}
      >
        <P.Title>{currentProject.name}</P.Title>
        <P.CloseButton onClick={closeModal}>❌</P.CloseButton>
        {imageDisplay && (
          <P.PhotoOfProject
            onClick={() => triggerLinkProject(currentProject.link)}
            src={currentProject.img}
          />
        )}
        <P.ProjectDesc>{currentProject.desc}</P.ProjectDesc>
      </P.ProjectModal>
      ;
    </>
  );
};

export default Modal;
