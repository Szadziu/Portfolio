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
    let boxHeight = 10;

    const addBoxOfSkill = (array, color, height) => {
      array.push(<P.BoxOfSkill color={color} height={height} />);
    };
    // zdaję sobie sprawę, że refactor tego DRY kodu aż się prosi, lecz w danym momencie nie miałem pomysłu jak to przerobić. Do zmiany.
    for (let i = 0; i < advancement; i++) {
      let color, height;
      boxHeight += 2;
      if (advancementLevel.length <= 2) {
        color = THEME.darkOrange;
        height = `${boxHeight}px`;
        addBoxOfSkill(advancementLevel, color, height);
        continue;
      }
      if (advancementLevel.length <= 5) {
        color = THEME.yellow;
        height = `${boxHeight}px`;
        addBoxOfSkill(advancementLevel, color, height);
        continue;
      }
      if (advancementLevel.length <= 9) {
        color = THEME.green;
        height = `${boxHeight}px`;
        addBoxOfSkill(advancementLevel, color, height);
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
