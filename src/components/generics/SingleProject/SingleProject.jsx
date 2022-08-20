import { useContext, useRef } from 'react';
import * as P from './singleProject.parts';
import { ProjectsContext } from '../../../contexts/ProjectsContext';

const SingleProject = ({ currentProject, parentRef, children }) => {
    const { setIsModalOpen, setCurrentProject } = useContext(ProjectsContext);
    const projectRef = useRef();

    const openModal = () => {
        setIsModalOpen(true);
        setCurrentProject(currentProject);
        document.querySelector('body').style.overflow = 'hidden';
        parentRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <P.Project
            key={currentProject.id}
            thumbnail={currentProject.img}
            done={currentProject.done}
            href={currentProject.link}
            target="_blank"
            onClick={openModal}
            ref={projectRef}
        >
            <div class="ch-item ch-img-1">
                <div class="ch-info-wrap">
                    <div class="ch-info">
                        <div class="ch-info-front ch-img-1"></div>
                        <div class="ch-info-back">
                            <h3>{currentProject.name}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <P.TitleOfProject>{children}</P.TitleOfProject>
        </P.Project>
    );
};

export default SingleProject;
