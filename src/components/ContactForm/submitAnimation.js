import gsap from 'gsap';

export const submitAnimation = (element) => {
  const button = element.current;
  const tl = gsap.timeline();
  tl.to(button, { x: 400, y: -280, duration: 3, scale: 0, opacity: 0 })
    .to(button, { x: 0, y: 0, duration: 2 })
    .to(button, { scale: 1, duration: 2, opacity: 1 });
};
