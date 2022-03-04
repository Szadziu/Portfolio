import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import gsap from "gsap";
import * as P from "./parts";

const AboutMeDesc = () => {
  const { ref, inView, entry } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      gsap.to(entry.target.children, { display: "block" });
    }
  }, [inView]);

  return (
    <P.Container ref={ref}>
      <P.Line>
        Mam na imię Maciej, jestem samoukiem w świecie frontendu od ponad roku,
        w tym czasie przyswoiłem fundamentalną wiedzę z zakresu html, css oraz
        javascript.
      </P.Line>
      <P.Line>
        Obecnie umacniam swoje szeregi na froncie w wiedzę o bibliotece React
        oraz języku Typescript.
      </P.Line>
      <P.Line>
        Chciałbym zweryfikować swoje umiejętności z zamiarem wyznaczenia
        konkretnych działań jakie należy podjąć, by móc wejść do świata IT i
        zająć się tym zawodowo.
      </P.Line>
      <P.Line>
        Jestem również absolwentem studiów inżynierskich o kierunku edukacja
        techniczno-informatyczna.
      </P.Line>
    </P.Container>
  );
};

export default AboutMeDesc;
