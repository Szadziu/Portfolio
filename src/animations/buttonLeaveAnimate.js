import gsap from "gsap";

export const buttonLeaveAnimate = (element) => {
  console.log("leaveHover");
  const button = element.current;
  const tl = gsap.timeline();
  tl.to(button, {
    opacity: "0.8",
    x: "-50px",
    width: "15vh",
    filter: "none",
    boxShadow: "none",
    backgroundColor: "black",
    color: "white",
  });
};
