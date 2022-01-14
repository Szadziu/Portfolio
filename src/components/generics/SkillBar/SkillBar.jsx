import * as P from './parts';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ children, advancement }, theme) => {
  const [ref, inView, entry] = useInView();
  useEffect(() => {
    if (inView) {
      boxesOfSkillsAnimation();
    }
  }, [inView]);

  const generateAdvancementLevel = () => {
    const advancementLevel = [];
    let boxHeight = 10;

    const addBoxOfSkill = (color, height) => {
      advancementLevel.push(<P.BoxOfSkill color={color} height={height} />);
    };
    // zdaję sobie sprawę, że refactor tego DRY kodu aż się prosi, lecz w danym momencie nie miałem pomysłu jak to przerobić. Do zmiany.
    for (let i = 0; i < advancement; i++) {
      let color;
      boxHeight += 2;
      if (advancementLevel.length <= 2) {
        color = theme.darkOrange;
        addBoxOfSkill(color, `${boxHeight}px`);
      } else if (advancementLevel.length <= 5) {
        color = theme.yellow;
        addBoxOfSkill(color, `${boxHeight}px`);
      } else if (advancementLevel.length <= 9) {
        color = theme.green;
        addBoxOfSkill(color, `${boxHeight}px`);
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
