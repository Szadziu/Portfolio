import facebookIcon from '../assets/socialIcons/facebook.png';
import githubIcon from '../assets/socialIcons/github.png';
import linkedinIcon from '../assets/socialIcons/linkedin.png';
import whatsappIcon from '../assets/socialIcons/whatsapp.png';

import calendarIcon from '../assets/projectsIcons/calendar.png';
import clickerGameIcon from '../assets/projectsIcons/clickerGame.png';
import cssGeneratorIcon from '../assets/projectsIcons/cssGenerator.png';
import creditCalculatorIcon from '../assets/projectsIcons/creditCalculator.png';
import maptyIcon from '../assets/projectsIcons/mapty.png';
import timerIcon from '../assets/projectsIcons/timer.png';
import dungeonIcon from '../assets/projectsIcons/dungeon.png';

export const QUOTE = `"Mądrzy ciągle się uczą, głupcy wszystko umieją."
  Apolinary Despinoix`;

export const SKILL_BUNDLE = [
    {
        id: 0,
        name: 'HTML 5',
        advancement: 8,
        desc: 'Znajomość języka znaczników pozwalająca na tworzenie struktury drzewa HTML, zgodnie z semantycznym zastosowaniem tagów ES6 oraz tworzenie i walidacja formularzy.',
    },

    {
        id: 1,
        name: 'CSS',
        advancement: 7,
        desc: 'Znajomość kaskadowych arkuszy stylów pozwalająca na tworzenie layoutów stron i aplikacji. Positioning, display, box model, grid, flex, media queries. Doświadczenie z konwencją BEM oraz z preprocessorem sass. Używałem również w projekcie frameworka tailwind CSS',
    },

    {
        id: 2,
        name: 'JavaScript',
        advancement: 6,
        desc: 'Znajomość składni ES6+ i struktury Javascript, manipulacje DOM, zapytania przy użyciu fetch API, moduły javascript, localStorage, ogólne rozumienie koncepcji hoistingu, zakresu, prototypów, klas.',
    },

    {
        id: 3,
        name: 'Vue',
        advancement: 6,
        desc: 'Aktualny framework, którego używam codziennie podczas tworzenia projektów komercyjnych. Używanie znanych dyrektyw, stosowanie vue-router czy też vuex w praktyce to moje codzienne zajęcie, gdzie z dnia na dzień uczę się coraz to więcej',
    },

    {
        id: 4,
        name: 'React',
        advancement: 2,
        desc: 'Podstawowa znajomość biblioteki React wystarczająca do budowania prostych aplikacji w oparciu między innymi o: komponenty funkcyjne lub klasowe, hooki reacta takie jak: useState, useEffect, useRef, useContext, usePortal, styled-components',
    },

    {
        id: 5,
        name: 'Inne',
        advancement: 3,
        desc: 'Znajomość takich narzędzi jak npm, git, figma, canva',
    },
];

export const PROJECTS = [
    {
        id: 0,
        name: 'Credit Calculator',
        img: creditCalculatorIcon,
        link: 'https://szadziu.github.io/CreditCalculator/',
        ghLink: 'https://github.com/Szadziu/CreditCalculator',
        desc: 'Aplikacja przedstawia kalkulator do obliczeń rat kredytowych uwzględniając przy tym wybrane przez użytkownika oprocentowanie. Projekt przystosowany do urządzeń desktopowych. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty klasowe), styled-components, font-awesome.',
    },
    {
        id: 1,
        name: 'Mapty App',
        img: maptyIcon,
        link: 'https://szadziu.github.io/MaptyApp/',
        ghLink: 'https://github.com/Szadziu/MaptyApp',
        desc: 'Aplikacja służy do wyznaczania miejsc z użyciem rzeczywistej mapy, w których określamy typ treningu jaki odbyliśmy, przebyty dystans, czas jaki zajęło ćwiczenie oraz w zależności od typu treningu jedną z dodatkowych opcji. Aplikacja zapisuje lokalnie nasze treningi. Projekt przystosowany do urządzeń desktopowych. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: Javascript (z użyciem klas), leaflet (mapa), operacje z obiektem Date oraz localStorage',
    },
    {
        id: 2,
        name: 'Box-shadow generator',
        img: cssGeneratorIcon,
        link: 'https://szadziu.github.io/boxShadowCSSGenerator/',
        ghLink: 'https://github.com/Szadziu/boxShadowCSSGenerator',
        desc: 'Aplikacja służy do wygenerowania właściwości box-shadow (CSS), nadania jej własnych ustawień i zaprezentowania finalnego rezultatu. Istnieje również możliwość wybrania koloru przez użytkownika. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty funkcyjne), styled-components, react hooks',
    },
    {
        id: 3,
        name: 'Calendar',
        img: calendarIcon,
        link: 'https://szadziu.github.io/calendarApp/',
        ghLink: 'https://github.com/Szadziu/calendarApp',
        desc: 'Kalendarz jest aplikacją umożliwiającą zapisywanie wydarzeń/zadań na poszczególne dni. Kalendarz jest rzeczywisty, wykorzystano również możliwość zapisu aktualnego stanu na serwerze z użyciem zapytań. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty funkcyjne), react-hooks, zapytania async/await, pre-processor Sass',
    },
    // {
    //     id: 4,
    //     name: 'Clicker Browser Game',
    //     img: clickerGameIcon,
    //     link: 'https://centmsn.github.io/clicker-game',
    //     ghLink: 'https://github.com/centmsn/clicker-game',
    //     desc: 'Aplikacja przedstawiająca grę polegającą na klikaniu w skarb znajdujący się w głownym panelu użytkownika pozwala generować zasoby w postaci tzw. złota, monet. Z ich użyciem gracz ma za zadanie odblokowywać kolejnych bohaterów, którzy wspomogą go poprzez dostarczenie dodatkowych zasobów i umiejętności. Przyrost złota gracza rośnie wtedy w znaczącym tempie co pozwala na wykup coraz to potężniejszych bohaterów. Obecnie gra jest rozwijana, posiada już takie funkcje jak zapisywanie i resetowanie gry, przewidywana jest sekcja osiągnięć. Aplikacja ta od początku powstaje w zespole dwuosobowym. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty funkcyjne), styled-components, local Storage, react-hooks, react-redux',
    // },
    {
        id: 4,
        name: 'Dungeon Game',
        img: dungeonIcon,
        link: 'https://szadziu.github.io/turnbasedgame/',
        ghLink: 'https://github.com/Szadziu/turnbasedgame',
        desc: 'Aplikacja przedstawiająca grę turową polegającą na toczeniu walk z coraz to potężniejszymi potworami. Do dyspozycji mamy równiez punkty umiejętności do rozdzielenia, aby polepszyć Naszego bohatera. Aplikacja została stworzona z użyciem klas przy wykorzystaniu frameworka Vue',
    },
    {
        id: 5,
        name: 'Timer',
        img: timerIcon,
        link: 'https://szadziu.github.io/stoper',
        ghLink: 'https://github.com/Szadziu/stoper',
        desc: 'Aplikacja imitująca stoper, umożliwia odmierzanie, zatrzymywanie oraz resetowanie czasu. Technologie, które zostały zastosowane w projekcie to: React (functional components), styled-components, operacje z obiektem Math',
    },
];

export const SOCIALS = [
    {
        id: 0,
        name: 'github',
        icon: githubIcon,
        link: 'https://www.github.com/szadziu',
    },
    {
        id: 1,
        name: 'facebook',
        icon: facebookIcon,
        link: 'https://www.facebook.com/McjMikolajczak',
    },
    {
        id: 2,
        name: 'whatsapp',
        icon: whatsappIcon,
        link: 'https://wa.me/48664095522',
    },
    {
        id: 3,
        name: 'linkedin',
        icon: linkedinIcon,
        link: 'https://www.linkedin.com/in/maciej-miko%C5%82ajczak-717ba8197/',
    },
];
