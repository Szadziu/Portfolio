import gsap from "gsap";

export const buttonAnimation = (element, setColor, animateOptions, color) => {
  gsap.to(element.current, animateOptions);
  setColor(color);
};
// potencjalne ulepszenie, które chciałem zastosować to pobieranie z contextu backgroundContext właściwości setColor w tym miejscu zamiast w czterech komponentach osobno, natomiast niezbyt mi to wyszło :P Stąd rozwiązanie jest jakie jest na tą chwilę.
// animki przeniesc do folderow poszczegolnych komponentow
// poprawa animacji kontenera z projektami
// zmiana designu kontenera na projekty
// opisy sekcji
// zmiana formularza (input na textarea) + dodatkowe pole z imieniem, labelki do czego co jest + krotkie info odezwij sie ws. wspolpracy itp
// feedback ze wiadomosc wyslana
// szczegoly w skillach
// widget z codewarsow, github
// Assassin do wyjebania / zamiast tego fota moja
// ewentualna zmiana całej kolorystyki portfolio na jasne
// stopka
