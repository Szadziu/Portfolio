import * as P from "./parts";
import { useEffect } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import { THEME } from "../../../constants";

const SkillBar = ({ children, advancement }) => {
  const [ref, inView, entry] = useInView();
  useEffect(() => {
    if (inView) {
      boxesOfSkillsAnimation();
    }
  }, [inView]);

  const generateAdvancementLevel = () => {
    const advancementLevel = [];

    const addBoxOfSkill = (array, color) => {
      array.push(<P.BoxOfSkill color={color} />);
    };
    // zdaję sobie sprawę, że refactor tego DRY kodu aż się prosi, lecz w danym momencie nie miałem pomysłu jak to przerobić. Do zmiany.
    for (let i = 0; i < advancement; i++) {
      let color;

      if (advancementLevel.length <= 2) {
        color = THEME.darkOrange;
        addBoxOfSkill(advancementLevel, color);
        continue;
      }
      if (advancementLevel.length <= 5) {
        color = THEME.yellow;
        addBoxOfSkill(advancementLevel, color);
        continue;
      }
      if (advancementLevel.length <= 9) {
        color = THEME.green;
        addBoxOfSkill(advancementLevel, color);
        continue;
      }
    }
    return advancementLevel;
  };
  // tutaj pojawiał mi się problem z przeniesieniem tej animacji do katalogu z animacjami gdyż nie bardzo chciał mi odczytał właściwość 'target'. Podjąłem kilka wariacji przekazania tego, ale bez skutku. Do zmiany w przyszłości.
  const boxesOfSkillsAnimation = () => {
    gsap.to(entry.target.children, { scale: 1, stagger: 0.5 });
  };

  return (
    <P.Bar>
      <P.TitleOfSkill>{children}</P.TitleOfSkill>
      <P.Boxes ref={ref}>{generateAdvancementLevel()}</P.Boxes>
    </P.Bar>
  );
};

export default SkillBar;
