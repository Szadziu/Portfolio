import gsap from "gsap";

export const buttonHoverAnimate = (element) => {
  console.log("hover");
  const button = element.current;
  const tl = gsap.timeline();
  tl.to(button, {
    x: "50px",
    width: "20vh",
    opacity: "1",
    yoyo: "true",
    filter: "none",
    backgroundColor: "white",
    color: "black",
    boxShadow: "0 0 150px 0 white",
  });
};
