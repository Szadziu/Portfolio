import gsap from "gsap";

export const contactButtonLoadAnimation = (element) => {
  gsap.to(element.current, {
    duration: 2,
    right: "5vw",
    ease: "elastic",
    delay: 4.5,
  });
};
