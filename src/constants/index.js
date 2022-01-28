import facebookIcon from '../assets/socialIcons/facebook.png';
import githubIcon from '../assets/socialIcons/github.png';
import linkedinIcon from '../assets/socialIcons/linkedin.png';
import whatsappIcon from '../assets/socialIcons/whatsapp.png';

import cafeLayoutIcon from '../assets/projectsIcons/cafeLayout.png';
import calendarIcon from '../assets/projectsIcons/calendar.png';
import clickerGameIcon from '../assets/projectsIcons/clickerGame.png';
import cssGeneratorIcon from '../assets/projectsIcons/cssGenerator.png';
import creditCalculatorIcon from '../assets/projectsIcons/creditCalculator.png';
import maptyIcon from '../assets/projectsIcons/mapty.png';
import recruitmentTaskIcon from '../assets/projectsIcons/recruitmentTask.png';
import shoppingListIcon from '../assets/projectsIcons/shoppingList.png';
import timerIcon from '../assets/projectsIcons/timer.png';

import udemyBadge from '../assets/badges/udemyBadge.jpeg';

export const QUOTE = `"Mądrzy ciągle się uczą, głupcy wszystko umieją."
  Apolinary Despinoix`;

export const SKILL_BUNDLE = [
  {
    id: 0,
    name: 'HTML 5',
    advancement: 8,
    desc: 'Znajomość języka znaczników pozwalająca na tworzenie struktury drzewa html, jak również jego semantyczne zastosowanie oraz tworzenie i walidacja formularzy.',
  },
  {
    id: 1,
    name: 'CSS',
    advancement: 7,
    desc: 'Znajomość kaskadowych arkuszy stylów pozwalająca na tworzenie layoutów stron i aplikacji. Positioning, display, box model, css grid, flex box, media queries. Podstawowe doświadczenie z konwencją BEM oraz z preprocessorem Sass (korzystając ze składni scss).',
  },
  {
    id: 2,
    name: 'JavaScript',
    advancement: 6,
    desc: 'Znajomość składni ES6+ i struktury Javascript, manipulacje DOM, zapytania przy użyciu fetch API, moduły javascript, ogólne rozumienie koncepcji hoistingu, zakresu, prototypów, klas.',
  },
  {
    id: 3,
    name: 'React',
    advancement: 5,
    desc: 'Znajomość biblioteki React wystarczająca na stworzenie prostej aplikacji w oparciu między innymi o: komponenty funkcyjne lub klasowe, hooks reacta, react-context, react-router (SPA), styled-components, npm, git, cra, podstawy react-redux.',
  },
  {
    id: 4,
    name: 'TypeScript',
    advancement: 3,
    desc: 'Podstawowa znajomość typowania poprzez zastosowanie type, alias, interface, enum, typów generycznych.',
  },
];

export const BUNCH_OF_BADGES = [
  {
    id: 0,
    name: 'codewars',
    image: 'https://www.codewars.com/users/Szadziu/badges/micro',
    link: 'https://www.codewars.com/users/Szadziu',
  },
  {
    id: 1,
    name: 'courses',
    image: udemyBadge,
    link: '',
  },
];

export const PROJECTS = [
  {
    id: 0,
    name: 'Credit Calculator',
    img: creditCalculatorIcon,
    link: 'https://szadziu.github.io/BankAppTask/',
    desc: 'Aplikacja przedstawia kalkulator do obliczeń rat kredytowych uwzględniając przy tym wybrane przez użytkownika oprocentowanie. Projekt przystosowany do urządzeń desktopowych. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty klasowe), styled-components, font-awesome.',
    done: true,
  },
  {
    id: 1,
    name: 'Mapty App',
    img: maptyIcon,
    link: 'https://szadziu.github.io/MaptyApp/',
    desc: 'Aplikacja służy do wyznaczania miejsc z użyciem rzeczywistej mapy, w których określamy typ treningu jaki odbyliśmy, przebyty dystans, czas jaki zajęło ćwiczenie oraz w zależności od typu treningu jedną z dodatkowych opcji. Aplikacja zapisuje lokalnie nasze treningi. Projekt przystosowany do urządzeń desktopowych. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: Javascript (z użyciem klas), leaflet (mapa), operacje z obiektem Date oraz localStorage',
    done: true,
  },
  {
    id: 2,
    name: 'Box-shadow generator',
    img: cssGeneratorIcon,
    link: 'https://szadziu.github.io/boxShadowCSSGenerator/',
    desc: 'Aplikacja służy do wygenerowania właściwości box-shadow (CSS), nadania jej własnych ustawień i zaprezentowania finalnego rezultatu. Istnieje również możliwość wybrania koloru przez użytkownika. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty funkcyjne), styled-components, react hooks',
    done: true,
  },
  {
    id: 3,
    name: 'Shoping App',
    img: shoppingListIcon,
    link: '#',
    desc: 'Możliwości tej aplikacji, której zadaniem jest tworzenie list zakupowych są bardzo praktyczne. Użytkownik A może bowiem stworzyć listę, wysłać ją do innego użytkownika B, który obecnie robi zakupy. Wszyscy korzystający z danej listy mogą odznaczać lub dodawać nowe produkty, które od razu się zaaktualizują. Aplikacja pozwala również na oznaczanie już kupionuych produktów, lecz także przydzielenia statusu "obecnie brak" dzięki czemu użytkownik A może dany produkt zastąpić. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty funkcyjne), tailwind, react-query',
    done: false,
  },
  {
    id: 4,
    name: 'Clicker Browser Game',
    img: clickerGameIcon,
    link: '#',
    desc: 'Aplikacja przedstawiająca grę polegającą na klikaniu w skarb znajdujący się w głownym panelu użytkownika pozwala generować zasoby w postaci tzw. złota, monet. Z ich użyciem gracz ma za zadanie odblokowywać kolejnych bohaterów, którzy wspomogą go poprzez dostarczenie dodatkowych zasobów i umiejętności. Przyrost złota gracza rośnie wtedy w znaczącym tempie co pozwala na wykup coraz to potężniejszych bohaterów. Obecnie gra jest rozwijana, posiada już takie funkcje jak zapisywanie i resetowanie gry, przewidywana jest sekcja osiągnięć. Aplikacja ta od początku powstaje w zespole dwuosobowym. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty funkcyjne), styled-components, local Storage, react-hooks, react-redux',
    done: false,
  },
  {
    id: 5,
    name: 'Cafe Layout',
    img: cafeLayoutIcon,
    link: 'https://szadziu.github.io/cafeLayout/',
    desc: 'Ten projekt przedstawia stronę internetową, a właściwie aplikację progresywną (PWA), która prezentuje przykładową firmę usługową w tym wypadku kawiarnię, jej produkty, możliwość zamówień oraz intuicyjne menu. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty funkcyjne), styled-components, react-hooks',
    done: false,
  },
  {
    id: 6,
    name: 'Calendar',
    img: calendarIcon,
    link: 'https://szadziu.github.io/calendarApp/',
    desc: 'Kalendarz jest aplikacją umożliwiającą zapisywanie wydarzeń/zadań na poszczególne dni. Kalendarz jest rzeczywisty, wykorzystano również możliwość zapisu aktualnego stanu na serwerze z użyciem zapytań. Technologie i biblioteki, które zostały użyte podczas tworzenia aplikacji: React (komponenty funkcyjne), react-hooks, zapytania async/await, pre-processor Sass',
    done: false,
  },
  {
    id: 7,
    name: 'Timer',
    img: timerIcon,
    link: 'https://szadziu.github.io/stoper',
    desc: 'Aplikacja imitująca stoper, umożliwia odmierzanie, zatrzymywanie oraz resetowanie czasu. Technologie, które zostały zastosowane w projekcie to: React (functional components), styled-components, operacje z obiektem Math',
    done: true,
  },
  {
    id: 8,
    name: 'Zadanie rekrutacyjne',
    img: recruitmentTaskIcon,
    link: '#',
    desc: 'Tutaj pozostawiam miejsce na pierwsze zadanie rekrutacyjne :) Technologie, które będą zastosowane w projekcie: te najbardziej odpowiednie',
    done: true,
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
