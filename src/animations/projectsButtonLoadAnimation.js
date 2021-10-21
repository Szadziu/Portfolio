import gsap from "gsap";

export const projectsButtonLoadAnimation = (element) => {
  gsap.set(element.current, { transformPerspective: 500 });

  gsap.to(element.current, {
    x: 0,
    left: "70vw",
    rotateY: 720,
    rotateX: 0,
    autoAlpha: 1,
    duration: 3,
    ease: "power2.out",
    delay: 0.5,
  });
};
