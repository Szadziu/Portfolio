import { mainBackgroundGradient } from "../../constants";
import ContactButton from "../ContactButton/ContactButton";
import SectionWrapper from "../generics/SectionWrapper";
import HomePageButton from "../HomePageButton";
import MySkillsButton from "../MySkillsButton";
import ProjectsButton from "../ProjectsButton";

const Landing = () => {
  return (
    <SectionWrapper gradient={mainBackgroundGradient}>
      <HomePageButton />
      <MySkillsButton />
      <ProjectsButton />
      <ContactButton />
    </SectionWrapper>
  );
};

export default Landing;
