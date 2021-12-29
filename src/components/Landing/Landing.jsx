import ContactButton from "../ContactButton/ContactButton";
import SectionWrapper from "../generics/SectionWrapper";
import * as P from "./parts.js";
import Button from "../generics/Button";
import HomePageButton from "../HomePageButton";
import MySkillsButton from "../MySkillsButton";
import ProjectsButton from "../ProjectsButton";

const Landing = () => {
  // const dupa = useRef();
  // useEffect(() => {
  //   gsap.to(dupa.current, {});
  // }, []);

  return (
    <SectionWrapper>
      {/* <HomePageButton />
      <MySkillsButton />
      <ProjectsButton />
      <ContactButton /> */}
      <P.Menu>
        <Button text="homePage" />
        <Button text="aboutMySkills" />
        <Button text="myProjects" />
        <Button text="contactToMe" />
      </P.Menu>
    </SectionWrapper>
  );
};

export default Landing;
