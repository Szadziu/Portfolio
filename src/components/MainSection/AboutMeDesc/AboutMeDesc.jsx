import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import * as P from './aboutMeDesc.parts';
import { useWindowSize } from '../../../hooks/useWindowSize';

const AboutMeDesc = () => {
    const { ref, inView, entry } = useInView({ threshold: 0.4 });
    const { height } = useWindowSize();

    useEffect(() => {
        if (inView) {
            gsap.to(entry.target.children, { display: 'block' });
        }
    }, [inView]);
    return (
        <P.Container ref={ref} currentScreenHeight={height}>
            <P.Line>
                Jako dynamiczny i ambitny junior frontend developer, pracujący obecnie z
                frameworkiem React, posiadam wykształcenie inżynierskie oraz ponad półroczne
                doświadczenie komercyjne w branży IT, gdzie obecnie tworzę projekty dla klientów
                zewnętrznych. Zdobyłem szerokie umiejętności z zakresu HTML, CSS, JavaScript,
                Typescript, React, dzięki samodzielnej nauce przez około dwa lata.
            </P.Line>

            <P.Line>
                Aktywnie szukam nowych wyzwań i chętnie podejmuję nowe projekty, dzięki którym mogę
                rozwijać swoje umiejętności i zdobywać cenne doświadczenie zawodowe. Moja pasja to
                tworzenie nowoczesnych aplikacji internetowych oraz ciągły rozwój moich zdolności, a
                determinacja i ciężka praca są dla mnie kluczem do osiągania sukcesów w branży IT i
                bycia cenionym specjalistą w swojej dziedzinie.
            </P.Line>
        </P.Container>
    );
};

export default AboutMeDesc;
