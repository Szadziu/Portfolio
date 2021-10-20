import * as P from "./parts";
import { socialsAnimation } from "../../animations/socialAnimation";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SocialsBanner = ({ icons }) => {
  const [ref, inView, entry] = useInView();

  useEffect(() => {
    if (inView) {
      socialsAnimation(entry);
    }
  }, [inView]);

  const generateIcons = () => {
    return icons.map((social) => (
      <a href={social.link} target="_blank" rel="noreferrer">
        <P.Img alt={social.name} src={social.icon}></P.Img>
      </a>
    ));
  };

  return <P.Banner ref={ref}>{generateIcons()}</P.Banner>;
};

export default SocialsBanner;
