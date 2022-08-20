import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
                Obecnie umacniam szeregi na froncie w wiedzę o praktyczne
                zastosowania frameworka Vue na stanowisku Junior Frontend
                Developera, a w czasie wolnym uczę się Reacta i Typescriptu
                tworząc nowe projekty. Posiadam fundamentalną wiedzę z zakresu
                HTML5, CSS3, Javascript, React, Vue. Zamiłowanie do technologii
                jest moją pasją i hobby, więc postawiłem sobie za cel, rozwijać
                się w tym zawodowo. Jako ścieżkę wybrałem front-end development.
            </P.Line>

            <P.Line>
                Pozwala mi ona na ciągły rozwój i doskonalenie samego siebie
                przez co, jak najlepiej mogę oddawać coraz to lepsze doznania i
                wrażenia na ręce użytkowników aplikacji, do których tworzenia
                mogłem się przyczynić. Dodatkowo ukończyłem studia inżynierskie
                o kierunku edukacja techniczno-informatyczna, a dziś chciałbym
                poszerzać swoje umiejętności z zamiarem tworzenia coraz to
                lepszych rozwiązań i produktów oraz czerpać satysfakcję i
                dzielić się wiedzą z tej dziedziny.
            </P.Line>
        </P.Container>
    );
};

export default AboutMeDesc;
