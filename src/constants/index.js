import facebookIcon from '../assets/socialIcons/facebook.png';
import githubIcon from '../assets/socialIcons/github.png';
import linkedinIcon from '../assets/socialIcons/linkedin.png';
import whatsappIcon from '../assets/socialIcons/whatsapp.png';

import themePaletteIcon from '../assets/projectsIcons/color-palette.png';
import cssGeneratorIcon from '../assets/projectsIcons/cssGenerator.png';
import creditCalculatorIcon from '../assets/projectsIcons/creditCalculator.png';
import timerIcon from '../assets/projectsIcons/timer.png';
import dungeonIcon from '../assets/projectsIcons/dungeon.png';
import recruitmentTaskIcon from '../assets/projectsIcons/recruitmentTask.png';

export const QUOTE = `"Mądrzy ciągle się uczą, głupcy wszystko umieją."
  Apolinary Despinoix`;

export const SKILL_BUNDLE = [
    {
        id: 0,
        name: 'HTML 5',
        advancement: 8,
        desc: 'Znajomość języka znaczników w stopniu pozwalającym na tworzenie struktury drzewa HTML, zgodnie z semantycznym zastosowaniem tagów ES6 oraz tworzenia i walidacji formularzy.',
    },

    {
        id: 1,
        name: 'CSS',
        advancement: 7,
        desc: 'Znajomość kaskadowych arkuszy stylów pozwalająca na tworzenie layoutów stron i aplikacji. Positioning, display, box model, grid, flex, media queries. Doświadczenie z konwencją BEM oraz z preprocessorem sass. Używałem również w projektach tailwind CSS.',
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
        advancement: 4,
        desc: 'Framework, którego używam codziennie podczas tworzenia projektów komercyjnych. Używanie znanych dyrektyw, stosowanie vue-router czy też vuex w praktyce to moje codzienne zajęcie, gdzie z dnia na dzień uczę się więcej',
    },

    {
        id: 4,
        name: 'React',
        advancement: 4,
        desc: 'Znajomość biblioteki React wystarczająca do budowania prostych aplikacji w oparciu między innymi o: komponenty funkcyjne lub klasowe, hooki reacta takie jak: useState, useEffect, useRef, useContext, usePortal. Korzystałem też z styled-components, material UI.',
    },

    {
        id: 5,
        name: 'Typescript',
        advancement: 2,
        desc: 'Aktualnie chciałbym rozwijać swoje umiejętności z wiedzy o Typescripcie. W tej chwili znam podstawy typowania.',
    },
];

export const PROJECTS = [
    {
        id: 0,
        name: 'Dungeon Game',
        img: dungeonIcon,
        link: 'https://szadziu.github.io/turnbasedgame/',
        ghLink: 'https://github.com/Szadziu/turnbasedgame',
        desc: 'Aplikacja przedstawiająca grę turową polegającą na toczeniu walk z coraz to potężniejszymi potworami. Do dyspozycji mamy równiez punkty umiejętności do rozdysponowania, aby polepszyć Naszego bohatera. Aplikacja została stworzona z użyciem klas przy wykorzystaniu frameworka Vue w wersji 2',
        done: true,
    },
    {
        id: 1,
        name: 'Box-shadow generator',
        img: cssGeneratorIcon,
        link: 'https://szadziu.github.io/boxShadowCSSGenerator/',
        ghLink: 'https://github.com/Szadziu/boxShadowCSSGenerator',
        desc: 'Aplikacja służy do generowania właściwości box-shadow (CSS), nadania jej własnych ustawień i zaprezentowania wizualnego podglądu. Istnieje również możliwość wybrania koloru przez użytkownika. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty funkcyjne), styled-components, react hooks',
        done: true,
    },
    {
        id: 2,
        name: 'Credit Calculator',
        img: creditCalculatorIcon,
        link: 'https://szadziu.github.io/CreditCalculator/',
        ghLink: 'https://github.com/Szadziu/CreditCalculator',
        desc: 'Aplikacja przedstawia kalkulator do obliczeń rat kredytowych uwzględniając przy tym wybrane przez użytkownika oprocentowanie. Projekt przystosowany do urządzeń desktopowych, jak i mobilnych. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty klasowe), styled-components, font-awesome.',
        done: true,
    },

    {
        id: 3,
        name: 'Timer',
        img: timerIcon,
        link: 'https://szadziu.github.io/stoper',
        ghLink: 'https://github.com/Szadziu/stoper',
        desc: 'Aplikacja przedstawiająca stoper, umożliwia odmierzanie, zatrzymywanie oraz resetowanie czasu. Technologie, które zostały zastosowane w projekcie to: React (komponenty funkcyjne), styled-components',
        done: true,
    },

    {
        id: 4,
        name: 'Paleta kolorów',
        img: themePaletteIcon,
        link: '#',
        ghLink: '#',
        desc: 'Aplikacja ma w przyszłości umożliwiać tworzenie własnych kompozycji kolorystycznych poprzez dodawanie poszczególnych barw i tworzenie setów, które można w prosty sposób udostępniać. Wszystko odbywać ma się na koncie korzystającego z niej użytkownika co pozwala też na archiwizację własnych setów. Obecnie projekt w budowie ... ',
        done: false,
    },
    {
        id: 5,
        name: 'Zadanie rekrutacyjne',
        img: recruitmentTaskIcon,
        link: '#',
        ghLink: '#',
        desc: 'Miejsce zostawione na zadanie rekrutacyjne :) zanim nie zastąpi go kolejny projekt.',
        done: false,
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
