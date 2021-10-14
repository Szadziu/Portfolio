import gsap from "gsap";

export const buttonAnimation = (element, setColor, animateOptions, color) => {
  console.log("hover");
  const button = element.current;
  const tl = gsap.timeline();
  tl.to(button, animateOptions);
  setColor(color);
};
