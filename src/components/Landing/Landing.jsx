import SectionWrapper from "../generics/SectionWrapper";
import HomePageButton from "../HomePageButton";
import MySkillsButton from "../MySkillsButton/MySkillsButton";

const Landing = () => {
  return (
    <SectionWrapper>
      <HomePageButton />
      <MySkillsButton />
    </SectionWrapper>
  );
};

export default Landing;
