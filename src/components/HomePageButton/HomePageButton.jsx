import { useRef, useEffect } from "react";
import gsap from "gsap";
import * as P from "./parts";

const HomePageButton = () => {
  useEffect(() => {
    const button = buttonRef.current;
    const tl = gsap.timeline({
      defaults: { ease: "bounce.out", duration: "2" },
    });

    gsap.set(button, { transformOrigin: "center top" });
    tl.to(button, { y: "110vh" }).to(
      button,
      { rotation: 270, fontSize: "55px", letterSpacing: "4px" },
      "-=1.2"
    );
  }, []);
  const buttonRef = useRef(null);

  return <P.Button ref={buttonRef}>homePage</P.Button>;
};

export default HomePageButton;
