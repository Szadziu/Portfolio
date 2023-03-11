import {useRef} from 'react';
import {useTheme} from 'styled-components';
import SectionWrapper from '../generics/SectionWrapper/SectionWrapper';
import SingleProject from '../generics/SingleProject/SingleProject';
import ProjectDetailsModal from '../generics/ProjectDetailsModal/ProjectDetailsModal';
import {PROJECTS} from '../../constants';
import * as P from './projects.parts';

const Projects = () => {
    const theme = useTheme();
    const parentRef = useRef();

    const generateProjects = () => {
        return PROJECTS.map((project) => (
            <SingleProject key={project.id} currentProject={project} parentRef={parentRef}>
                {project.name}
            </SingleProject>
        ));
    };
    return (
        <SectionWrapper id="projects" bgColor="white" minHeight={320}>
            <P.ProjectsSectionTitle ref={parentRef} color={theme.black}>
                projekty
            </P.ProjectsSectionTitle>
            <P.ProjectsWrapper>
                {generateProjects()}
                <ProjectDetailsModal />
            </P.ProjectsWrapper>
        </SectionWrapper>
    );
};

export default Projects;
