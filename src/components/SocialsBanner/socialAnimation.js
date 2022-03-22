import gsap from 'gsap';

export const socialsAnimation = ({ target: { children: icons } }) => {
  gsap.fromTo(
    icons,
    { x: '-100vw' },
    {
      x: 0,
      duration: 3.2,
      stagger: 0.7,
      ease: 'expo',
      rotation: 720,
    }
  );
};
