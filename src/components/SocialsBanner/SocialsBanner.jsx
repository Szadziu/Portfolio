import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { socialsAnimation } from "./socialAnimation";

import * as P from "./socialsBanner.parts";

const SocialsBanner = ({ icons }) => {
  const [ref, inView, entry] = useInView();

  useEffect(() => {
    if (inView) {
      socialsAnimation(entry);
    }
  }, [inView]);

  const generateIcons = () => {
    return icons.map((social) => (
      <P.SocialLink href={social.link} target="_blank" rel="noreferrer">
        <P.Img alt={social.name} src={social.icon}></P.Img>
      </P.SocialLink>
    ));
  };

  return <P.Banner ref={ref}>{generateIcons()}</P.Banner>;
};

export default SocialsBanner;
