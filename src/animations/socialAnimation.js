import gsap from "gsap";

export const socialsAnimation = (elements) => {
  const tl = gsap.timeline();
  tl.from(elements.target.children, {
    x: "-50vw",
    duration: 3,
    opacity: 0,
    stagger: 0.5,
    ease: "expo",
    rotation: 720,
  });
};
