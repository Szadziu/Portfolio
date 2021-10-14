import { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import * as P from "./parts";
import { buttonAnimation } from "../../animations/buttonAnimation";
import { THEME } from "../../constants";
import { Context } from "../Landing/Landing";

const HomePageButton = () => {
  const value = useContext(Context);

  useEffect(() => {
    const button = buttonRef.current;
    const tl = gsap.timeline({
      defaults: { ease: "bounce.out", duration: "2" },
    });

    gsap.set(button, {
      transformOrigin: "center top",
      backgroundColor: "transparent",
      color: "white",
    });
    tl.to(button, { duration: 2, y: "110vh" }).to(
      button,
      { rotation: 270, duration: 2, fontSize: "3rem" },
      "-=1.2"
    );
  }, []);
  const buttonRef = useRef(null);
  const startAnimateOptions = {
    x: "50px",
    width: "20vh",
    // opacity: "1",

    backgroundColor: "white",
    color: "black",
    boxShadow: "0 0 150px 0 white",
    // onComplete: setColor(THEME.mainGradient),
  };
  const endAnimateOptions = {
    opacity: "1",
    x: "-50px",
    width: "15vh",

    boxShadow: "none",
    backgroundColor: "black",
    color: "white",
  };
  return (
    <P.Button
      onMouseEnter={() =>
        buttonAnimation(
          buttonRef,
          value.setColor,
          startAnimateOptions,
          "rgba(0,0,0,0.9)"
        )
      }
      onMouseLeave={() => {
        buttonAnimation(
          buttonRef,
          value.setColor,
          endAnimateOptions,
          THEME.mainGradient
        );
      }}
      ref={buttonRef}
    >
      homePage
    </P.Button>
  );
};

export default HomePageButton;
