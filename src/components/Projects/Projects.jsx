import { useState } from "react";
import { useTheme } from "styled-components";

import SectionTitle from "../generics/SectionTitle";
import SectionWrapper from "../generics/SectionWrapper";
import SingleProject from "../generics/SingleProject/SingleProject";

import { PROJECTS } from "../../constants";

import * as P from "./projects.parts";

const Projects = () => {
  const theme = useTheme();

  const generateProjects = () => {
    return PROJECTS.map((project) => (
      <SingleProject {...project}>{project.name}</SingleProject>
    ));
  };
  return (
    <P.Wrapper id="projects">
      <SectionWrapper bgColor="white">
        <SectionTitle color={theme.mint}>Moje projekty</SectionTitle>
        <P.ProjectsWrapper>{generateProjects()}</P.ProjectsWrapper>
      </SectionWrapper>
    </P.Wrapper>
  );
};

export default Projects;
