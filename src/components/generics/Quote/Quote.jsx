import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import gsap from "gsap";

import * as P from "./quote.parts";

const Quote = ({ children }) => {
  const { ref, inView, entry } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      gsap.to(entry.target, { duration: 1, opacity: 1 });
    }
  }, [inView]);

  return <P.QuoteParam ref={ref}>{children}</P.QuoteParam>;
};

export default Quote;
