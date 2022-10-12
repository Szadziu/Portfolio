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
        id: 'skill_1',
        name: 'HTML 5',
        advancement: 8,
        desc: 'Znajomość najważniejszych znaczników i ich atrybutów, zgodnie z semantycznym zastosowaniem, tworzenia struktury dokumentu.',
    },

    {
        id: 'skill_2',
        name: 'CSS / Sass',
        advancement: 7,
        desc: 'Znajomość kaskadowych arkuszy stylów pozwalająca na tworzenie layoutów stron i aplikacji, selektorów i ich wagi, pozycjonowanie, box model, grid, flex-box, media queries, RWD, konwencja BEM, preprocessor sass/scss, tailwind CSS.',
    },

    {
        id: 'skill_3',
        name: 'JavaScript',
        advancement: 6,
        desc: 'Znajomość składni języka Javascript, typów prymitywnych i złożonych, zapytania przy użyciu fetch API / axios, składna ES6+, moduły Javascript, API przeglądarek (localStorage, DOM, inne), ogólne rozumienie koncepcji hoistingu, zakresu, prototypów, klas.',
    },

    {
        id: 'skill_4',
        name: 'Typescript',
        advancement: 3,
        desc: 'Znajomość podstaw typowania, utility types, generic types ',
    },

    {
        id: 'skill_5',
        name: 'React / Next',
        advancement: 5,
        desc: 'Znajomość biblioteki React wystarczająca do budowania aplikacji w oparciu między innymi o: komponenty funkcyjne / klasowe, hooki reacta (useState, useEffect, useRef, useContext, usePortal), custom hooki. Umiejętność korzystania z styled-components, material UI.  Podstawowa znajomość frameworka Next.',
    },

    {
        id: 'skill_6',
        name: 'Vue',
        advancement: 4,
        desc: ' Znajomość biblioteki Vue wystarczająca do budowania aplikacji w oparciu między innymi o: znane dyrektywy, vue-router, vuex',
    },
];

export const PROJECTS = [
    {
        id: 'prj_1',
        name: 'Dungeon Game',
        img: dungeonIcon,
        link: 'https://szadziu.github.io/turnbasedgame/',
        ghLink: 'https://github.com/Szadziu/turnbasedgame',
        desc: 'Aplikacja przedstawiająca grę turową polegającą na toczeniu walk z coraz to potężniejszymi potworami. Do dyspozycji mamy równiez punkty umiejętności do rozdysponowania, aby polepszyć Naszego bohatera. Aplikacja została stworzona z użyciem klas przy wykorzystaniu frameworka Vue w wersji 2',
        done: true,
    },
    {
        id: 'prj_2',
        name: 'Box-shadow generator',
        img: cssGeneratorIcon,
        link: 'https://szadziu.github.io/boxShadowCSSGenerator/',
        ghLink: 'https://github.com/Szadziu/boxShadowCSSGenerator',
        desc: 'Aplikacja służy do generowania właściwości box-shadow (CSS), nadania jej własnych ustawień i zaprezentowania wizualnego podglądu. Istnieje również możliwość wybrania koloru przez użytkownika. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty funkcyjne), styled-components, react hooks',
        done: true,
    },
    {
        id: 'prj_3',
        name: 'Credit Calculator',
        img: creditCalculatorIcon,
        link: 'https://szadziu.github.io/CreditCalculator/',
        ghLink: 'https://github.com/Szadziu/CreditCalculator',
        desc: 'Aplikacja przedstawia kalkulator do obliczeń rat kredytowych uwzględniając przy tym wybrane przez użytkownika oprocentowanie. Projekt przystosowany do urządzeń desktopowych, jak i mobilnych. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty klasowe), styled-components, font-awesome.',
        done: true,
    },

    {
        id: 'prj_4',
        name: 'Timer',
        img: timerIcon,
        link: 'https://szadziu.github.io/stoper',
        ghLink: 'https://github.com/Szadziu/stoper',
        desc: 'Aplikacja przedstawiająca stoper, umożliwia odmierzanie, zatrzymywanie oraz resetowanie czasu. Technologie, które zostały zastosowane w projekcie to: React (komponenty funkcyjne), styled-components',
        done: true,
    },

    {
        id: 'prj_5',
        name: 'Paleta kolorów',
        img: themePaletteIcon,
        link: '#',
        ghLink: '#',
        desc: 'Aplikacja ma w przyszłości umożliwiać tworzenie własnych kompozycji kolorystycznych poprzez dodawanie poszczególnych barw i tworzenie setów, które można w prosty sposób udostępniać. Wszystko odbywać ma się na koncie korzystającego z niej użytkownika co pozwala też na archiwizację własnych setów. Obecnie projekt w budowie ... ',
        done: false,
    },
    {
        id: 'prj_6',
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
        id: 'scl_1',
        name: 'github',
        icon: githubIcon,
        link: 'https://www.github.com/szadziu',
    },
    {
        id: 'scl_2',
        name: 'facebook',
        icon: facebookIcon,
        link: 'https://www.facebook.com/McjMikolajczak',
    },
    {
        id: 'scl_3',
        name: 'whatsapp',
        icon: whatsappIcon,
        link: 'https://wa.me/48664095522',
    },
    {
        id: 'scl_4',
        name: 'linkedin',
        icon: linkedinIcon,
        link: 'https://www.linkedin.com/in/maciej-miko%C5%82ajczak-717ba8197/',
    },
];

export const TIMELINE_ITEMS = [
    {
        text: 'Pravna Group - Junior Frontend Developer',
        date: 'Maj 2022',
        category: {
            tag: 'DEV',
            color: '#018f69',
        },
    },
    {
        text: 'Kursy, szkolenia, nauka, własne projekty',
        date: 'Sty 2020',
        category: {
            tag: 'Learn',
            color: '#018f69',
        },
    },
];
