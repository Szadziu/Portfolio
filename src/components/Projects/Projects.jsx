import { PROJECTS } from "../../constants";
import SectionWrapper from "../generics/SectionWrapper";
import SingleProject from "../generics/SingleProject/SingleProject";
import { ProjectsWrapper } from "../PuzzleBoxWrapper/parts";

const Projects = () => {
  const generateProjects = () => {
    return PROJECTS.map((project) => (
      <SingleProject>{project.name}</SingleProject>
    ));
  };

  return (
    <SectionWrapper>
      <ProjectsWrapper>{generateProjects()}</ProjectsWrapper>
    </SectionWrapper>
  );
};

export default Projects;
