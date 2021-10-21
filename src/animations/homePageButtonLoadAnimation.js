import gsap from "gsap";

export const homePageButtonLoadAnimation = (element) => {
  const button = element.current;
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
};
