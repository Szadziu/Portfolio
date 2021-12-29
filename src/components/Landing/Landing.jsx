import SectionWrapper from "../generics/SectionWrapper";
import * as P from "./parts.js";
import Button from "../generics/Button";

const Landing = () => {
  // const dupa = useRef();
  // useEffect(() => {
  //   gsap.to(dupa.current, {});
  // }, []);

  return (
    <SectionWrapper>
      <P.Wrapper>
        <P.Menu id="home">
          <Button text="homePage" link="home" />
          <Button text="aboutMySkills" link="skills" />
          <Button text="myProjects" link="projects" />
          <Button text="contactToMe" link="contact" />
        </P.Menu>
      </P.Wrapper>
    </SectionWrapper>
  );
};

export default Landing;
