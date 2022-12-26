import facebookIcon from '../assets/socialIcons/facebook.png';
import githubIcon from '../assets/socialIcons/github.png';
import linkedinIcon from '../assets/socialIcons/linkedin.png';
import whatsappIcon from '../assets/socialIcons/whatsapp.png';

import omnifoodLayoutIcon from '../assets/projectsIcons/omnifoodLayout.png';
// import themePaletteIcon from '../assets/projectsIcons/color-palette.png';
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
        desc: 'Posiadam dobrą znajomość HTML5, w tym tworzenia struktury strony za pomocą elementów semantycznych oraz wstawiania obrazków, linków i formularzy. Potrafię także wykorzystywać nowe elementy HTML5, takie jak audio, video, canvas czy mapy oraz dostosowywać stronę do potrzeb osób niepełnosprawnych. Tworzę poprawny kod HTML zgodnie ze standardami i dobrymi praktykami.',
    },

    {
        id: 'skill_2',
        name: 'CSS / Sass',
        advancement: 7,
        desc: 'Posiadam dobrą znajomość najważniejszych koncepcji języka CSS, takich jak selektory, reguły stylów, kaskadowość, dziedziczenie, jednostki miary i animacje. Potrafię również zaprojektować responsywne strony internetowe z wykorzystaniem narzędzi takich jak Flexbox i Grid. Moje umiejętności z zakresu SASS obejmują tworzenie bardziej złożonych arkuszy stylów z użyciem zmiennych, funkcji, dyrektyw @import i @mixin.',
    },

    {
        id: 'skill_3',
        name: 'JavaScript',
        advancement: 6,
        desc: 'Znam najważniejsze koncepcje języka, takie jak zmienne, operatory, instrukcje warunkowe, pętle, funkcje, obiekty, tablice, wyrażenia regularne. Posiadam umiejętności korzystania z narzędzi developerskich, takich jak debugger i console, aby rozwiązywać problemy i testować kod. Potrafię tworzyć skrypty, które są w stanie manipulować elementami na stronie internetowej, obsługiwać zdarzenia użytkownika, przetwarzać dane i komunikować się z serwerem za pomocą asynchronicznych żądań HTTP.',
    },

    {
        id: 'skill_4',
        name: 'Typescript',
        advancement: 4,
        desc: 'Posiadam podstawową wiedzę na temat języka TypeScript, w tym znajomość typów danych i interfejsów. Korzystam z niego w połączeniu z frameworkiem React. Staram się stale rozszerzać moją wiedzę i umiejętności w tym zakresie, ale jeszcze nie jestem ekspertem w tej dziedzinie.',
    },

    {
        id: 'skill_5',
        name: 'React / Next',
        advancement: 5,
        desc: 'Jestem obeznany z koncepcjami frameworka React, takimi jak tworzenie komponentów, zarządzanie stanem aplikacji oraz wykorzystywanie wirtualnego DOM do optymalizacji wydajności aplikacji. Ponadto, posiadam podstawową znajomość frameworka Next, który umożliwia mi budowanie aplikacji z server-side renderingiem oraz zoptymalizowaną wydajnością. Potrafię również wykorzystywać hooki do zarządzania stanem aplikacji w komponentach funkcyjnych.',
    },

    {
        id: 'skill_6',
        name: 'Vue',
        advancement: 3,
        desc: 'Posiadam podstawową wiedzę o frameworku Vue, którą zdobyłem podczas pracy przy jednym projekcie komercyjnym z wykorzystaniem Vue 2. Potrafię tworzyć komponenty oraz zarządzać ich stanem za pomocą obiektu "data". Znam również podstawy Vuex, biblioteki do zarządzania globalnym stanem aplikacji, oraz wykorzystywania mechanizmów reakcji w celu optymalizacji wydajności aplikacji.',
    },
];

export const PROJECTS = [
    {
        id: 'prj_1',
        name: 'Dungeon Game',
        img: dungeonIcon,
        link: 'https://szadziu.github.io/turnbasedgame/',
        ghLink: 'https://github.com/Szadziu/turnbasedgame',
        desc: 'Chcesz poczuć dreszczyk emocji i rzucić wyzwanie najpotężniejszym potworom? Ta gra turowa to idealna rozrywka dla Ciebie! W grze będziesz mieć do dyspozycji swojego wyjątkowego bohatera, którego będziesz mógł ulepszać dzięki punktom umiejętności. Twoim zadaniem będzie toczenie walk z coraz potężniejszymi potworami, a każde zwycięstwo przybliży Cię do zdobycia sławy i chwały. Ale uważaj, porażka oznacza koniec Twojej przygody. Aplikacja została stworzona z użyciem frameworka Vue w wersji 2 i została oparta na klasach, dzięki czemu jest stabilna i łatwa w użytkowaniu.',
        done: true,
    },
    {
        id: 'prj_2',
        name: 'Box-shadow generator',
        img: cssGeneratorIcon,
        link: 'https://szadziu.github.io/boxShadowCSSGenerator/',
        ghLink: 'https://github.com/Szadziu/boxShadowCSSGenerator',
        desc: 'Czy szukasz narzędzia, które pozwoli Ci szybko i łatwo stworzyć właściwości box-shadow (CSS)? Ta aplikacja to idealne rozwiązanie dla Ciebie! Pozwoli Ci na generowanie box-shadow za pomocą prostego i intuicyjnego narzędzia. Możesz dostosować ustawienia takie jak rozmiar, intensywność cienia czy odległość od elementu, a także wybrać kolor, który najlepiej pasuje do Twojego projektu. Co więcej, aplikacja oferuje również wizualny podgląd, dzięki czemu możesz zobaczyć, jak będzie wyglądać Twoje box-shadow na żywo. Aplikacja została stworzona z użyciem technologii React, a do tworzenia stylów została użyta biblioteka styled-components. Skorzystałem również z react hooks, dzięki czemu aplikacja jest prosta w obsłudze i elastyczna.',
        done: true,
    },
    {
        id: 'prj_3',
        name: 'Credit Calculator',
        img: creditCalculatorIcon,
        link: 'https://szadziu.github.io/CreditCalculator/',
        ghLink: 'https://github.com/Szadziu/CreditCalculator',
        desc: 'Ten kalkulator umożliwia obliczenie rat kredytu w oparciu o wybrane przez Ciebie oprocentowanie. Wprowadź wymaganą kwotę kredytu, okres spłaty oraz oprocentowanie, a aplikacja obliczy dla Ciebie wysokość miesięcznej raty oraz całkowity koszt kredytu. Aplikacja została stworzona z użyciem technologii React, skorzystałem z komponentów klasowych oraz biblioteki styled-components, dzięki czemu jest prosta w obsłudze i atrakcyjna wizualnie. Dołożyłem również starań, aby aplikacja była przystosowana do urządzeń desktopowych i mobilnych, dzięki czemu możesz korzystać z niej w dowolnym miejscu i o dowolnej porze.',
        done: true,
    },

    {
        id: 'prj_4',
        name: 'Timer',
        img: timerIcon,
        link: 'https://szadziu.github.io/stoper',
        ghLink: 'https://github.com/Szadziu/stoper',
        desc: 'Aplikacja umożliwia odmierzanie czasu, jak również jego zatrzymywanie oraz resetowanie. Dzięki prostym i intuicyjnym przyciskom będziesz mógł kontrolować stoper w dowolnym momencie. Jest niezwykle przydatna podczas treningów, kiedy chcesz mieć precyzyjny pomiar czasu, lub podczas wyzwań, kiedy liczy się każda sekunda. Aplikacja została stworzona z użyciem technologii React, gdzie skorzystałem z komponentów funkcyjnych oraz biblioteki styled-components, dzięki czemu jest prosta w obsłudze i atrakcyjna wizualnie. ',
        done: true,
    },

    {
        id: 'prj_5',
        name: 'Omnifood Layout',
        img: omnifoodLayoutIcon,
        link: 'https://omnifood-layout.netlify.app/',
        ghLink: 'https://github.com/Szadziu/Omnifood_Layout_Page',
        desc: 'Projekt przedstawia stronę internetową dla firmy oferującej dostawy jedzenia oparte na diecie z wykorzystaniem sztucznej inteligencji. Strona została zaprojektowana z wykorzystaniem znanych patternów, aby zapewnić przejrzystość i intuicyjność dla użytkowników. Całość została zaprojektowana z myślą o responsywności, co oznacza, że strona jest przystosowana do wyświetlania na różnych urządzeniach, takich jak komputery, tablety czy telefony komórkowe.',
        done: true,
    },
    // {
    //     id: 'prj_5',
    //     name: 'Paleta kolorów',
    //     img: themePaletteIcon,
    //     link: '#',
    //     ghLink: '#',
    //     desc: 'Aplikacja ma w przyszłości umożliwiać tworzenie własnych kompozycji kolorystycznych poprzez dodawanie poszczególnych barw i tworzenie setów, które można w prosty sposób udostępniać. Wszystko odbywać ma się na koncie korzystającego z niej użytkownika co pozwala też na archiwizację własnych setów. Obecnie projekt w budowie ... ',
    //     done: false,
    // },
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
