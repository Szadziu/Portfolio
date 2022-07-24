import { useContext } from 'react';
import { useTheme } from 'styled-components';
import SectionWrapper from '../generics/SectionWrapper/SectionWrapper';
import SingleProject from '../generics/SingleProject/SingleProject';
import Modal from '../generics/Modal/Modal';
import { PROJECTS } from '../../constants';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import * as P from './projects.parts';

const Projects = () => {
    const theme = useTheme();
    const { isModalOpen } = useContext(ProjectsContext);

    const generateProjects = () => {
        return PROJECTS.map((project) => (
            <SingleProject key={project.id} currentProject={project}>
                {project.name}
            </SingleProject>
        ));
    };
    return (
        <SectionWrapper id="projects" bgColor="white">
            <P.ProjectsSectionTitle color={theme.black}>
                Moje projekty
            </P.ProjectsSectionTitle>
            <P.ProjectsWrapper>
                {generateProjects()}
                {isModalOpen && <Modal />}
            </P.ProjectsWrapper>
        </SectionWrapper>
    );
};

export default Projects;
