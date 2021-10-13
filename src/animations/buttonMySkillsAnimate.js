import gsap from "gsap";

export const buttonMySkillsAnimate = (element) => {
  const tl = gsap.timeline();

  tl.to(element, {
    x: "100px",
  });
};
