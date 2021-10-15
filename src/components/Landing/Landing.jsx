import ContactButton from "../ContactButton/ContactButton";
import SectionWrapper from "../generics/SectionWrapper";
import HomePageButton from "../HomePageButton";
import MySkillsButton from "../MySkillsButton";
import ProjectsButton from "../ProjectsButton";
import { useContext } from "react";
import { BackgroundContext } from "../App/App";

const Landing = () => {
  const { color } = useContext(BackgroundContext);

  return (
    <SectionWrapper bgColor={color}>
      <HomePageButton />
      <MySkillsButton />
      <ProjectsButton />
      <ContactButton />
    </SectionWrapper>
  );
};

export default Landing;
