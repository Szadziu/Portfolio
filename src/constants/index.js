import facebookIcon from '../assets/socialIcons/facebook.png';
import whatsappIcon from '../assets/socialIcons/whatsapp.png';
import linkedinIcon from '../assets/socialIcons/linkedin.png';
import githubIcon from '../assets/socialIcons/github.png';

import creditCalculatorIcon from '../assets/projectsIcons/creditCalculator.png';
import maptyIcon from '../assets/projectsIcons/mapty.png';
import cssGeneratorIcon from '../assets/projectsIcons/cssGenerator.png';
import shoppingListIcon from '../assets/projectsIcons/shoppingList.png';
import clickerGameIcon from '../assets/projectsIcons/clickerGame.png';
import cafeLayoutIcon from '../assets/projectsIcons/cafeLayout.png';
import calendarIcon from '../assets/projectsIcons/calendar.png';
import timerIcon from '../assets/projectsIcons/timer.png';
import drawingAppIcon from '../assets/projectsIcons/drawingApp.png';

export const QUOTE = `"Mądrzy ciągle się uczą, głupcy wszystko umieją."
  Apolinary Despinoix`;

export const SKILL_BUNDLE = [
  {
    id: 0,
    name: 'HTML 5',
    advancement: 8,
    desc: 'opanowane podstawy języka znaczników jak również jego semantyczne zastosowanie, tworzenie i walidacja formularzy',
  },
  {
    id: 1,
    name: 'CSS',
    advancement: 7,
  },
  {
    id: 2,
    name: 'JavaScript',
    advancement: 6,
  },
  {
    id: 3,
    name: 'React',
    advancement: 4,
  },
  {
    id: 4,
    name: 'TypeScript',
    advancement: 1,
  },
];

export const PROJECTS = [
  {
    id: 0,
    name: 'Credit Calculator',
    img: creditCalculatorIcon,
    link: 'https://szadziu.github.io/BankAppTask/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 1,
    name: 'Mapty App',
    img: maptyIcon,
    link: 'https://szadziu.github.io/MaptyApp/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 2,
    name: 'Box-shadow generator',
    img: cssGeneratorIcon,
    link: 'https://szadziu.github.io/boxShadowCSSGenerator/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 3,
    name: 'Shoping App',
    img: shoppingListIcon,
    link: 'https://www.google.pl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 4,
    name: 'Clicker Browser Game',
    img: clickerGameIcon,
    link: 'https://www.google.pl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 5,
    name: 'Cafe Layout',
    img: cafeLayoutIcon,
    link: 'https://www.google.pl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 6,
    name: 'Calendar',
    img: calendarIcon,
    link: 'https://www.google.pl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
  },
  {
    id: 7,
    name: 'Timer',
    img: timerIcon,
    link: 'https://szadziu.github.io/stoper',
    desc: 'Aplikacja Stoper pozwala zmierzyć określoną długość czasu, a na jej punkt startowy oraz końcowy wpływa działanie użytkownika. Czas, który został wstrzymany może być wznowiony od tego miejsca. Dodatkowo istnieje możliwość zresetowania całego pomiaru. Technologie, które zostały zastosowane w projekcie to: React (functional components), styled-components',
  },
  {
    id: 8,
    name: 'Drawing App',
    img: drawingAppIcon,
    link: 'https://www.google.pl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet accumsan porttitor. Suspendisse condimentum tortor eget cursus dictum. Duis tempor tincidunt accumsan. Donec placerat augue et dui hendrerit efficitur. Praesent dictum cursus tempus. Donec malesuada nisi magna, eu ultrices turpis eleifend non. Vestibulum commodo purus a feugiat iaculis. Aliquam vel elit nisi. Nam eu libero pulvinar, pellentesque lacus eu, eleifend sem.',
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
