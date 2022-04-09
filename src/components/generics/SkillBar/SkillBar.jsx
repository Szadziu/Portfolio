import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { useTheme } from 'styled-components';
import gsap from 'gsap';

import * as P from './skillBar.parts';

const SkillBar = ({ children, skill }) => {
  const [ref, inView, entry] = useInView();
  const theme = useTheme();

  useEffect(() => {
    if (inView) {
      boxesOfSkillsAnimation();
    }
  }, [inView]);

  const generateAdvancementLevel = () => {
    const advancementLevel = [];
    let boxHeight = 2;

    const addBoxOfSkill = (color, height) => {
      advancementLevel.push(<P.BoxOfSkill color={color} height={height} />);
    };

    for (let i = 0; i < skill.advancement; i++) {
      let color;
      boxHeight += 2;
      if (advancementLevel.length <= 2) {
        color = theme.lightBlue;
        addBoxOfSkill(color, boxHeight);
      } else if (advancementLevel.length <= 5) {
        color = theme.brighterBlue;
        addBoxOfSkill(color, boxHeight);
      } else if (advancementLevel.length <= 9) {
        color = theme.blue;
        addBoxOfSkill(color, boxHeight);
      }
    }
    return advancementLevel;
  };

  const boxesOfSkillsAnimation = () => {
    gsap.to(entry.target.children, { scale: 1, stagger: 0.5 });
  };

  return (
    <P.Bar>
      <P.InfoOfSkill>{children}</P.InfoOfSkill>
      <P.Boxes ref={ref}>{generateAdvancementLevel()}</P.Boxes>
    </P.Bar>
  );
};

export default SkillBar;
