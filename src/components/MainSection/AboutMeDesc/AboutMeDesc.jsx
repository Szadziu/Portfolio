import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import gsap from 'gsap';
import * as P from './aboutMeDesc.parts';
import {useWindowSize} from '../../../hooks/useWindowSize';

const AboutMeDesc = () => {
    const {ref, inView, entry} = useInView({threshold: 0.4});
    const {height} = useWindowSize();

    useEffect(() => {
        if (inView) {
            gsap.to(entry.target.children, {display: 'block'});
        }
    }, [inView]);
    return (
        <P.Container ref={ref} currentScreenHeight={height}>
            <P.Line>
                Jestem frontend developerem na stanowisku juniorskim z niespełna rocznym doświadczeniem. Na swoim koncie mam kilka projektów
                komercyjnych, w tym aplikację do pozyskiwania danych od użytkownika umożliwiającą wygenerowanie na ich podstawie wniosku o ogłoszenie
                upadłości konsumenckiej, również CRM dla klienta zewnętrznego jako narzędzie do sprawnego zarządzania relacjami z klientami oraz
                zasobami firmy. Projekt był oparty na React z Next, Typescript, Apollo, GraphQL oraz Hasura.
            </P.Line>

            <P.Line>
                W pracy codziennej korzystam z technologii takich jak HTML, CSS, JavaScript, Typescript, React, Bubble co pozwala mi tworzyć
                nowoczesne i responsywne aplikacje. Moje wykształcenie inżynierskie oraz determinacja i ciężka praca pomagają mi w dążeniu do
                określonych celów. W czasie wolnym prowadzę też bloga o tematyce programistycznej, którego współtworzyłem, tworzę też własne
                projekty, które pozwalają mi poznawać nowe technologie oraz uczestniczę w kursach, aby stale rozwijać swoje zdolności i być cenionym
                specjalistą w branży IT.
            </P.Line>
            {/* <P.Line>
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
            </P.Line> */}
        </P.Container>
    );
};

export default AboutMeDesc;
