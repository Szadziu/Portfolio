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
                zastosowanie frameworka React na stanowisku Junior Frontend
                Developera, gdzie jestem odpowiedzialny za tworzenie warstwy
                wizualnej oraz elementów dynamicznych aktualnie tworzonej
                aplikacji. Zamiłowanie do technologii jest moją pasją i hobby,
                więc postawiłem sobie za cel, rozwijać się w tym zawodowo.
                Pozwala mi to na ciągły rozwój i doskonalenie samego siebie
                przez co, jak najlepiej mogę oddawać coraz to lepsze doznania i
                wrażenia na ręce użytkowników aplikacji, do których tworzenia
                mogłem się przyczynić.
            </P.Line>

            <P.Line>
                Dodatkowo ukończyłem studia inżynierskie o kierunku Edukacja
                Techniczno-Informatyczna, a dziś chciałbym poszerzać swoje
                umiejętności z zamiarem tworzenia nowoczesnych rozwiązań i
                produktów oraz czerpać satysfakcję i dzielić się wiedzą z tej
                dziedziny. W czasie wolnym obecnie dokształcam się z Next,
                Typescript oraz GraphQL.
            </P.Line>
        </P.Container>
    );
};

export default AboutMeDesc;
