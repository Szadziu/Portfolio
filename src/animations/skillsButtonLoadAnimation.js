import gsap from "gsap";

export const skillsButtonLoadAnimation = (element) => {
  const tl = gsap.timeline();
  tl.to(element.current, { duration: 0.5, top: "20vh", ease: "power2.in" })
    .to(element.current, {
      duration: 1.3,
      rotation: "140deg",
      ease: "back",
    })
    .to(
      element.current,
      { duration: 2, rotation: "0deg", ease: "elastic" },
      "-=0.5"
    );
};
