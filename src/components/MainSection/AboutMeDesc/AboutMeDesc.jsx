import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { checkOfDimensions } from '../../DefenderOfDimensions/DefenderOfDimensions';
import gsap from 'gsap';
import * as P from './aboutMeDesc.parts';

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
                Cześć na imię mam Maciej, a zamiłowanie do technologii jest moją
                pasją i hobby, więc postawiłem sobie za cel, rozwijać się w tym
                zawodowo. Jako ścieżkę wybrałem front-end development, którego
                aktywnie uczę się każdego dnia. Pozwala mi to na ciągły rozwój i
                doskonalenie samego siebie przez co, jak najlepiej mogę oddawać
                coraz to lepsze doznania i wrażenia na ręce użytkowników
                aplikacji, do których tworzenia mogłem się przyczynić.
            </P.Line>

            <P.Line>
                Posiadam fundamentalną wiedzę z zakresu HTML, CSS, Javascript
                oraz React czy Vue. Jestem absolwentem studiów inżynierskich o
                kierunku edukacja techniczno-informatyczna, a dziś chciałbym
                zweryfikować swoje umiejętności z zamiarem wyznaczenia
                konkretnych działań jakie należy podjąć, by móc wejść do świata
                IT i czerpać oraz dzielić się wiedzą z tej dziedziny.
            </P.Line>
        </P.Container>
    );
};

export default AboutMeDesc;
