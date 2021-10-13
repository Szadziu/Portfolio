import { PROJECTS } from "../../constants";
import SectionWrapper from "../generics/SectionWrapper";
import SingleProject from "../generics/SingleProject/SingleProject";
import { ProjectsWrapper } from "../PuzzleBoxWrapper/parts";

const Projects = () => {
  const generateProjects = () => {
    return PROJECTS.map((project) => (
      <SingleProject link={project.link}>{project.name}</SingleProject>
    ));
  };
  // projekty w modalach
  return (
    <SectionWrapper>
      <ProjectsWrapper>{generateProjects()}</ProjectsWrapper>
    </SectionWrapper>
  );
};

export default Projects;
