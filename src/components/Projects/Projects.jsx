import { useState, useContext } from 'react';
import { useTheme } from 'styled-components';

import SectionTitle from '../generics/SectionTitle';
import SectionWrapper from '../generics/SectionWrapper';
import SingleProject from '../generics/SingleProject/SingleProject';

import { PROJECTS } from '../../constants';

import * as P from './projects.parts';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import Modal from '../generics/Modal/Modal';

const Projects = () => {
  const theme = useTheme();
  const { isModalOpen, setIsModalOpen, currentProject } =
    useContext(ProjectsContext);

  const generateProjects = () => {
    return PROJECTS.map((project) => (
      <SingleProject currentProject={project}>{project.name}</SingleProject>
    ));
  };
  return (
    <SectionWrapper bgColor="white">
      <SectionTitle color={theme.black}>Moje projekty</SectionTitle>
      <P.ProjectsWrapper id="projects">
        {generateProjects()}
        {isModalOpen && <Modal />}
      </P.ProjectsWrapper>
    </SectionWrapper>
  );
};

export default Projects;
