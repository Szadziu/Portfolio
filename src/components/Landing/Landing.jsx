import { useState } from "react";
import ContactButton from "../ContactButton/ContactButton";
import SectionWrapper from "../generics/SectionWrapper";
import HomePageButton from "../HomePageButton";
import MySkillsButton from "../MySkillsButton";
import ProjectsButton from "../ProjectsButton";

const Landing = () => {
  const [color, setColor] = useState("");

  return (
    <SectionWrapper bgColor={color}>
      <HomePageButton setColor={setColor} />
      <MySkillsButton />
      <ProjectsButton />
      <ContactButton />
    </SectionWrapper>
  );
};

export default Landing;
