import * as P from "./parts";
import SkillBar from "../generics/SkillBar";
import { SKILL_BUNDLE, QUOTE } from "../../constants";
import { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

const ProgressWrapper = () => {
  const quoteRef = useRef(null);

  const intersection = useIntersection(quoteRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const quoteAnimate = (visible, color) => {
    const quote = quoteRef.current;
    const tl = gsap.timeline();

    tl.to(quote, 1, { opacity: visible });
  };
  intersection && intersection.intersectionRatio >= 1
    ? quoteAnimate("1")
    : quoteAnimate("0");

  const renderListOfSkills = () => {
    return SKILL_BUNDLE.map((skill) => (
      <SkillBar advancement={skill.advancement} key={skill.id}>
        {skill.name}
        {` ⚙️ ${skill.advancement * 10}% ⚙️`}
      </SkillBar>
    ));
  };

  return (
    <P.SkillContainer>
      <P.Quote ref={quoteRef}>{QUOTE}</P.Quote>
      {renderListOfSkills()}
    </P.SkillContainer>
  );
};

export default ProgressWrapper;
