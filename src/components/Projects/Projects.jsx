import { useState } from "react";
import { PROJECTS } from "../../constants";
import Modal from "../generics/Modal/Modal";
import SectionWrapper from "../generics/SectionWrapper";
import SingleProject from "../generics/SingleProject/SingleProject";
import * as P from "./parts";

const Projects = () => {
  const [isDisplayProject, setIsDisplayProject] = useState(false);
  const [currentProject, setCurrentProject] = useState("");

  const openModal = (project) => {
    setCurrentProject(project);
    setIsDisplayProject(!isDisplayProject);
  };

  const closeModal = () => {
    setIsDisplayProject(!isDisplayProject);
  };

  const generateProjects = () => {
    return PROJECTS.map((project) => (
      <SingleProject
        key={project.id}
        link={project.link}
        onClick={() => openModal(project)}
      >
        {project.name}
      </SingleProject>
    ));
  };
  // projekty w modalach
  return (
    <SectionWrapper bgColor="black">
      <P.ProjectsWrapper>{generateProjects()}</P.ProjectsWrapper>
      {isDisplayProject && (
        <Modal currentProject={currentProject} closeModal={closeModal} />
      )}
    </SectionWrapper>
  );
};

export default Projects;
