import gsap from "gsap";

export const socialsAnimation = (elements) => {
  const tl = gsap.timeline();
  tl.to(elements.target.children, {
    x: "65vw",
    duration: 3,
    opacity: 1,
    stagger: 0.5,
    ease: "expo",
    rotation: 720,
  });
};
