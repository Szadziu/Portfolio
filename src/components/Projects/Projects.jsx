import { useState } from 'react';
import { PROJECTS } from '../../constants';
import Modal from '../generics/Modal/Modal';
import SectionWrapper from '../generics/SectionWrapper';
import SingleProject from '../generics/SingleProject/SingleProject';
import SectionTitle from '../generics/SectionTitle';
import * as P from './parts';
import { useTheme } from 'styled-components';

const Projects = () => {
  const theme = useTheme();

  const [isDisplayProject, setIsDisplayProject] = useState(false);
  const [currentProject, setCurrentProject] = useState('');

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
        thumbnail={project.img}
      >
        {project.name}
      </SingleProject>
    ));
  };
  return (
    <P.Wrapper id='projects'>
      <SectionWrapper bgColor='white'>
        <SectionTitle color={theme.mint}>Moje projekty</SectionTitle>
        <P.ProjectsWrapper>{generateProjects()}</P.ProjectsWrapper>
        {isDisplayProject && (
          <Modal currentProject={currentProject} closeModal={closeModal} />
        )}
      </SectionWrapper>
    </P.Wrapper>
  );
};

export default Projects;
