import * as P from './parts';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import InfoBubble from '../InfoBubble';

const SkillBar = ({ children, skill, isVisible, setIsVisible, key }) => {
  const [ref, inView, entry] = useInView();
  useEffect(() => {
    if (inView) {
      boxesOfSkillsAnimation();
    }
  }, [inView]);

  const theme = useTheme();

  const showInfoBubble = (e, skill) => {
    // console.log(e.target.data, skill.id);
    // if (skill.id === id) setIsVisible((value) => !value);
  };

  const generateAdvancementLevel = () => {
    const advancementLevel = [];
    let boxHeight = 6;

    const addBoxOfSkill = (color, height) => {
      advancementLevel.push(<P.BoxOfSkill color={color} height={height} />);
    };
    // zdaję sobie sprawę, że refactor tego DRY kodu aż się prosi, lecz w danym momencie nie miałem pomysłu jak to przerobić. Do zmiany.
    for (let i = 0; i < skill.advancement; i++) {
      let color;
      boxHeight += 2;
      if (advancementLevel.length <= 2) {
        color = theme.darkOrange;
        addBoxOfSkill(color, boxHeight);
      } else if (advancementLevel.length <= 5) {
        color = theme.yellow;
        addBoxOfSkill(color, boxHeight);
      } else if (advancementLevel.length <= 9) {
        color = theme.green;
        addBoxOfSkill(color, boxHeight);
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
