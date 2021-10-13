import { useRef, useEffect } from "react";
import gsap from "gsap";
import * as P from "./parts";
import { buttonHoverAnimate } from "../../animations/buttonHoverAnimate";
import { buttonLeaveAnimate } from "../../animations/buttonLeaveAnimate";

const HomePageButton = ({ setColor }) => {
  useEffect(() => {
    const button = buttonRef.current;
    const tl = gsap.timeline({
      defaults: { ease: "bounce.out", duration: "2" },
    });

    gsap.set(button, { transformOrigin: "center top" });
    tl.to(button, 2, { y: "110vh", filter: "invert(100%)" }).to(
      button,
      2,
      { rotation: 270, fontSize: "3rem", opacity: "0.8" },
      "-=1.2"
    );
  }, []);
  const buttonRef = useRef(null);

  return (
    <P.Button
      onMouseEnter={() => buttonHoverAnimate(buttonRef, setColor)}
      onMouseLeave={() => buttonLeaveAnimate(buttonRef, setColor)}
      ref={buttonRef}
    >
      homePage
    </P.Button>
  );
};

export default HomePageButton;
