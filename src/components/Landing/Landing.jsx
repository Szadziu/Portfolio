import { useState } from "react";
import ContactButton from "../ContactButton/ContactButton";
import SectionWrapper from "../generics/SectionWrapper";
import HomePageButton from "../HomePageButton";
import MySkillsButton from "../MySkillsButton";
import ProjectsButton from "../ProjectsButton";
import { createContext } from "react";

export const BackgroundContext = createContext("Default value");
const Landing = () => {
  const [color, setColor] = useState("");

  const value = {
    color,
    setColor,
  };

  return (
    <BackgroundContext.Provider value={value}>
      <SectionWrapper bgColor={color}>
        <HomePageButton />
        <MySkillsButton />
        {/* <ProjectsButton /> */}
        {/* <ContactButton /> */}
      </SectionWrapper>
    </BackgroundContext.Provider>
  );
};

export default Landing;
