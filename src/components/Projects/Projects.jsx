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
      <SingleProject {...project}>{project.name}</SingleProject>
    ));
  };
  return (
    <P.Wrapper id="projects">
      <SectionWrapper bgColor="white">
        {isModalOpen && <Modal />}
        <SectionTitle color={theme.mint}>Moje projekty</SectionTitle>
        <P.ProjectsWrapper>{generateProjects()}</P.ProjectsWrapper>
      </SectionWrapper>
    </P.Wrapper>
  );
};

export default Projects;
