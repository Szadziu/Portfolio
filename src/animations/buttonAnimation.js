import gsap from "gsap";

export const buttonAnimation = (element, setColor, animateOptions, color) => {
  console.log("hover");
  const button = element.current;
  const tl = gsap.timeline();
  tl.to(button, animateOptions);
  setColor(color);
};
// potencjalne ulepszenie, które chciałem zastosować to pobieranie z contextu backgroundContext właściwości setColor w tym miejscu zamiast w czterech komponentach osobno, natomiast niezbyt mi to wyszło :P Stąd rozwiązanie jest jakie jest na tą chwilę.
