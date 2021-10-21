import * as P from "./parts";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const Quote = ({ children }) => {
  const { ref, inView, entry } = useInView({ threshold: 1 });

  // tutaj zastanawiałem się czy jest sens tworzyć osobny plik dla takiej animacji ? Pozostawiam do oceny.
  useEffect(() => {
    if (inView) {
      gsap.to(entry.target, { duration: 1, opacity: 1 });
    }
  }, [inView]);

  return <P.QuoteParam ref={ref}>{children}</P.QuoteParam>;
};

export default Quote;
