import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import gsap from 'gsap';
import {useWindowSize} from '../../../hooks/useWindowSize';
import * as P from './aboutMeDesc.parts';

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
                Frontend developer na stanowisku juniorskim z niespełna rocznym doświadczeniem. Na swoim koncie mam kilka projektów
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
        </P.Container>
    );
};

export default AboutMeDesc;
