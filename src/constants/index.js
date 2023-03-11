import facebookIcon from '../assets/socialIcons/facebook.png';
import githubIcon from '../assets/socialIcons/github.png';
import linkedinIcon from '../assets/socialIcons/linkedin.png';
import whatsappIcon from '../assets/socialIcons/whatsapp.png';

import omnifoodLayoutIcon from '../assets/projectsIcons/omnifoodLayout.png';
import cssGeneratorIcon from '../assets/projectsIcons/cssGenerator.png';
import creditCalculatorIcon from '../assets/projectsIcons/creditCalculator.png';
import stopwatchIcon from '../assets/projectsIcons/stopwatch.png';
import dungeonIcon from '../assets/projectsIcons/dungeon.png';
import todayILearnedIcon from '../assets/projectsIcons/todayILearned.png';
import mobileAppIcon from '../assets/projectsIcons/mobileApp.png';
import consumerBankruptcyIcon from '../assets/projectsIcons/consumerBankruptcy.png';

import numberOfGuessDemoMovie from '../assets/videos/demos_of_guess_number_app.webm';
import customerBankruptcyDemoMovie from '../assets/videos/demos_of_bankruptcy_app.MOV';

export const QUOTE = `"Mądrzy ciągle się uczą, głupcy wszystko umieją."
  Apolinary Despinoix`;

export const SKILLS_BUNDLE = [
    {
        id: 'skill_1',
        name: 'HTML 5',
        advancement: 8,
        desc: 'Znam HTML5 i umiem tworzyć struktury stron z użyciem elementów semantycznych, dodawać obrazy, linki i formularze. Potrafię także korzystać z nowych funkcji HTML5, takich jak audio i video, i tworzyć dostępne dla niepełnosprawnych strony zgodnie z dobrymi praktykami.',
    },

    {
        id: 'skill_2',
        name: 'CSS / Sass',
        advancement: 7,
        desc: 'Znam ważne koncepcje języka CSS, takie jak selektory, reguły stylów, kaskadowość, dziedziczenie, jednostki miary i animacje. Tworzę także responsywne strony internetowe, wykorzystując Flexbox i Grid. Posiadam również umiejętności w SASS, tworząc bardziej zaawansowane arkusze stylów z użyciem zmiennych, funkcji i dyrektyw.',
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
        desc: 'Posiadam podstawową wiedzę na temat języka TypeScript, w tym znajomość typów danych i interfejsów. Korzystam z niego w połączeniu z frameworkiem React. Staram się stale rozszerzać moją wiedzę i umiejętności w tym zakresie by kiedyś zostać ekspertem w tej dziedzinie.',
    },

    {
        id: 'skill_5',
        name: 'React / Next',
        advancement: 5,
        desc: 'Jestem obeznany z koncepcjami frameworka React, takimi jak tworzenie komponentów, zarządzanie stanem aplikacji oraz wykorzystywanie wirtualnego DOM do optymalizacji wydajności aplikacji. Ponadto, posiadam podstawową znajomość frameworka Next, który umożliwia mi budowanie aplikacji z server-side renderingiem oraz zoptymalizowaną wydajnością. Potrafię również wykorzystywać hooki do zarządzania stanem aplikacji w komponentach funkcyjnych.',
    },

    {
        id: 'skill_6',
        name: 'Low-code',
        advancement: 4,
        desc: 'Posiadam znajomość takich narzędzi low-code takich jak, Retool, Appsmith, lecz głównie Bubble.io. Pozwala mi to na szybkie tworzenie aplikacji internetowych, które mogą być wykorzystywane zarówno w celach prywatnych, jak i komercyjnych. W przyszłości mógłbym rozwinąć swoje umiejętności w tym zakresie, aby móc tworzyć bardziej zaawansowane aplikacje.',
    },

    {
        id: 'skill_7',
        name: 'Integracja z backendem',
        advancement: 3,
        desc: 'Zdobyłem doświadczenie w tworzeniu zapytań GraphQL i odbieraniu odpowiedzi za pomocą biblioteki Apollo Client. Wykorzystywałem również Hasurę, jako platformę do zarządzania bazą danych i łatwej integracji z aplikacją frontendową. Dzięki temu byłem w stanie zapewnić dynamiczną i elastyczną komunikację pomiędzy aplikacją, a danymi przechowywanymi na serwerze.',
    },

    {
        id: 'skill_8',
        name: 'Zarządzanie projektem',
        advancement: 6,
        desc: 'Korzystałem z szerokiego zakresu narzędzi do zarządzania projektem, takich jak Jira, które umożliwiło mi efektywną współpracę z zespołem i zarządzanie zadaniami. Contentful to kolejne narzędzie, które służy mi do zarządzania treścią na współprowadzonym przeze mnie blogu. Narzędzia do zarządzania paczkami, z którymi do tej pory pracowałem to npm i yarn. Narzędzie do tworzenia i współdzielenia projektów interfejsu użytkownika, które poznałem to Figma. Git i GitHub to narzędzia, które pomagają mi zarządzać wersjami projektu i współpracować z innymi programistami.',
    },
];

export const PROJECTS = [
    {
        id: 'prj_1',
        name: 'Dungeon Game',
        img: dungeonIcon,
        link: 'https://szadziu.github.io/turnbasedgame/',
        ghLink: 'https://github.com/Szadziu/turnbasedgame',
        desc: 'Chcesz poczuć dreszczyk emocji i rzucić wyzwanie najpotężniejszym potworom? Ta gra turowa to idealna rozrywka dla Ciebie! W grze będziesz mieć do dyspozycji swojego wyjątkowego bohatera, którego będziesz mógł ulepszać dzięki punktom umiejętności. Twoim zadaniem będzie toczenie walk z coraz potężniejszymi potworami, a każde zwycięstwo przybliży Cię do zdobycia sławy i chwały. Ale uważaj, porażka oznacza koniec Twojej przygody. Aplikacja została stworzona z użyciem frameworka Vue w wersji 2.',
        done: true,
        techTags: ['Vue', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        id: 'prj_2',
        name: 'Box-shadow generator',
        img: cssGeneratorIcon,
        link: 'https://szadziu.github.io/boxShadowCSSGenerator/',
        ghLink: 'https://github.com/Szadziu/boxShadowCSSGenerator',
        desc: 'Czy szukasz narzędzia, które pozwoli Ci szybko i łatwo stworzyć właściwości box-shadow (CSS)? Ta aplikacja to idealne rozwiązanie dla Ciebie! Pozwoli Ci na generowanie box-shadow za pomocą prostego i intuicyjnego narzędzia. Możesz dostosować ustawienia takie jak rozmiar, intensywność cienia czy odległość od elementu, a także wybrać kolor, który najlepiej pasuje do Twojego projektu. Co więcej, aplikacja oferuje również wizualny podgląd, dzięki czemu możesz zobaczyć, jak będzie wyglądać stworzony cień.',
        done: true,
        techTags: ['React', 'JavaScript', 'HTML', 'CSS', 'Styled Components'],
    },
    {
        id: 'prj_3',
        name: 'Credit Calculator',
        img: creditCalculatorIcon,
        link: 'https://szadziu.github.io/CreditCalculator/',
        ghLink: 'https://github.com/Szadziu/CreditCalculator',
        desc: 'Ten kalkulator umożliwia obliczenie rat kredytu w oparciu o wybrane przez Ciebie oprocentowanie. Wprowadź wymaganą kwotę kredytu, okres spłaty oraz oprocentowanie, a aplikacja obliczy dla Ciebie wysokość miesięcznej raty oraz całkowity koszt kredytu. Dołożyłem również starań, aby aplikacja była przystosowana do urządzeń desktopowych, jak i mobilnych, dzięki czemu możesz korzystać z niej w dowolnym miejscu.',
        done: true,
        techTags: ['React', 'JavaScript', 'HTML', 'CSS', 'Styled Components'],
    },

    {
        id: 'prj_4',
        name: 'Stopwatch',
        img: stopwatchIcon,
        link: 'https://szadziu.github.io/stoper',
        ghLink: 'https://github.com/Szadziu/stoper',
        desc: 'Aplikacja umożliwia odmierzanie czasu, jak również jego zatrzymywanie oraz resetowanie. Dzięki prostym i intuicyjnym przyciskom będziesz mógł kontrolować stoper w dowolnym momencie. Jest niezwykle przydatna podczas treningów, kiedy chcesz mieć precyzyjny pomiar czasu, lub podczas wyzwań, kiedy liczy się każda sekunda.',
        done: true,
        techTags: ['React', 'JavaScript', 'HTML', 'CSS', 'Styled Components'],
    },

    {
        id: 'prj_5',
        name: 'Omnifood Layout',
        img: omnifoodLayoutIcon,
        link: 'https://omnifood-layout.netlify.app/',
        ghLink: 'https://github.com/Szadziu/Omnifood_Layout_Page',
        desc: 'Projekt przedstawia stronę internetową dla firmy oferującej dostawy jedzenia oparte na diecie z wykorzystaniem sztucznej inteligencji. Strona została zaprojektowana z wykorzystaniem znanych patternów, aby zapewnić przejrzystość i intuicyjność dla użytkowników. Strona posiada pełną responsywność również na urządzenia mobilne. Projekt został stworzony w ramach kursu "Build Responsive Real-World Websites with HTML and CSS" autorstwa Jonasa Schmedtmanna.',
        done: true,
        techTags: ['HTML', 'CSS', 'Sass', 'JavaScript', ],
    },
    {
        id: 'prj_6',
        name: 'Today I learned',
        img: todayILearnedIcon,
        link: 'https://todayilearned-web-app.netlify.app/',
        ghLink: 'https://github.com/Szadziu/today_i_learned',
        desc: 'Aplikacja jest przeznaczona do zapisywania i przeglądania informacji (faktów), które użytkownicy dodają do wspólnej bazy danych. Użytkownicy prócz możliwości dodawania nowych faktów oraz ich źródeł weryfikujących ich wiarygodność, mają opcję dodania kategorii, a po stworzeniu możliwość oceniania treści wiedzy. Lista faktów posiada filtrowanie po kategoriach dzięki czemu łatwiej jest znaleźć interesujące nas fakty. Jest to full-stack aplikacja, oparta na React oraz utworzonej bazie danych przy pomocy Supabase. Projekt został utworzony w ramach kursu "Crash Course: Build a Full-Stack Web App in a Weekend" autorstwa Jonasa Schmedtmanna.',
        done: true,
        techTags: ['React', 'JavaScript', 'HTML', 'CSS', 'Supabase', 'Styled Components', 'Netlify',],
    },
    {
        id: 'prj_7',
        name: 'Guess the number',
        img: mobileAppIcon,
        link: '#',
        ghLink: '#',
        demo: numberOfGuessDemoMovie,
        desc: 'Demo prezentuje aplikację, którą napisałem w React Native z użyciem Expo w ramach kursu "React Native - The Practical Guide 2023" autorstwa Maximiliana Schwarzmüllera, jest to prosty wprowadzający do świata aplikacji mobilnych, projekt przedstawiający grę w której użytkownik wybiera liczbę, a komputer próbuje odgadnąć jego wybór otrzymując wskazówki nakierowujące na poprawną odpowiedź. Projekt nauczył mnie podstaw tworzenia w React Native.',
        done: true,
        techTags: ['React Native', 'JavaScript', 'HTML', 'CSS', 'Expo', 'Android Studio'],
    },
    {
        id: 'prj_8',
        name: 'Bankruptcy App',
        img: consumerBankruptcyIcon,
        link: '#',
        ghLink: '#',
        demo: customerBankruptcyDemoMovie,
        desc: 'Demo prezentuje projekt komercyjny, przy którym miałem okazję pracować. Jest to aplikacja zbierająca szczegółowe dane od zarejestrowanego użytkownika, która ma za zadanie wygenerować wniosek o ogłoszenie upadłości konsumenckiej, który zostanie przekazany do rozpatrzenia. Głównym wyzwaniem w tej aplikacji była ankieta, która dynamicznie dopasowywała się do bieżących odpowiedzi, zawiera sporo pól formularzy różnego rodzaju i zależności między sobą. Sama ankieta składa się z ponad 60 pytań.',
        done: true,
        techTags: ['Vue', 'JavaScript', 'HTML', 'CSS', 'Vuetify'],
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
        text: 'Kursy ● Nauka ● Projekty ● Portfolio',
        date: 'Styczeń 2020',
        value: 25,
    },
    {
        text: 'Pravna Group ● Junior Frontend Developer',
        date: 'Maj 2022',
        value: 65,
    },
];

export const TECH_COLOR_TAGS = {
    JavaScript: '#F7DF1E',
    React: '#61DAFB',
    'React Native': '#61DAFB',
    Vue: '#4FC08D',
    HTML: '#E34F26',
    CSS: '#1572B6',
    'Styled Components': '#DB7093',
    Supabase: '#1F8755',
    Expo: '#000020',
    'Android Studio': '#3DDC84',
    Vuetify: '#1867C0',
    Netlify: '#00C7B7',
    Sass: '#CC6699',
};
