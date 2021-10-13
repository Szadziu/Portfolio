import * as P from "./parts";
import SkillBar from "../generics/SkillBar";
import { SKILL_BUNDLE, QUOTE } from "../../constants";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

const ProgressWrapper = () => {
  const { ref, inView, entry } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      gsap.to(entry.target, { duration: 1, opacity: 1 });
    }
  }, [inView]);

  const renderListOfSkills = () => {
    return SKILL_BUNDLE.map((skill) => (
      <SkillBar advancement={skill.advancement} key={skill.id}>
        {skill.name}
        {` ⚙️ ${skill.advancement * 10}% ⚙️`}
      </SkillBar>
    ));
  };
  //! nazwa komponentu do >>>>!!!!!!<<<< zmiany
  return (
    <P.SkillContainer>
      <P.Quote ref={ref}>{QUOTE}</P.Quote>
      {renderListOfSkills()}
    </P.SkillContainer>
  );
};

export default ProgressWrapper;
