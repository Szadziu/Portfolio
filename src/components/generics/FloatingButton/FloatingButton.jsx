import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import floatingButtonImage from "../../../assets/upArrow.png";

import * as P from "./floatingButton.parts";

const FloatingButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrollY = document.documentElement.scrollTop;
    setVisible(scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return createPortal(
    <P.Button
      visible={visible}
      onClick={scrollToTop}
      image={floatingButtonImage}
      disabled={!visible}
    />,
    document.getElementById("floating-button")
  );
};

export default FloatingButton;
