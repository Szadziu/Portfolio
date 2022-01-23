import gsap from 'gsap';

export const socialsAnimation = (elements) => {
  const tl = gsap.timeline();
  tl.to(elements.target.children, {
    x: '80vw',
    duration: 3,
    stagger: 0.7,
    ease: 'expo',
    rotation: 720,
  });
};
