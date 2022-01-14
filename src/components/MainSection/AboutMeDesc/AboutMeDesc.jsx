import * as P from './parts';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import gsap from 'gsap';

const AboutMeDesc = () => {
  const { ref, inView, entry } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      gsap.to(entry.target.children, { display: 'block' });
    }
  }, [inView]);

  return (
    <P.Container ref={ref}>
      <P.Line>
        Mam na imię Maciej, jestem samoukiem w świecie frontendu od ponad roku,
        w tym czasie
      </P.Line>
      <P.Line>
        przyswoiłem fundamentalną wiedzę z zakresu html, css oraz javascript.
        Obecnie umacniam{' '}
      </P.Line>
      <P.Line>
        swoje szeregi na froncie w wiedzę o bibliotece React oraz języku
        Typescript. Chciałbym{' '}
      </P.Line>
      <P.Line>
        zweryfikować swoje umiejętności z zamiarem wyznaczenia konkretnych
        działań jakie należy{' '}
      </P.Line>
      <P.Line>
        podjąć, by móc wejść do świata IT i zająć się tym zawodowo. Jestem
        również absolwentem
      </P.Line>
      <P.Line>
        {' '}
        studiów inżynierskich o kierunku edukacja techniczno-informatyczna.
      </P.Line>
    </P.Container>
  );
};

export default AboutMeDesc;
