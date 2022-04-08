import { useContext, useRef } from 'react';
import * as P from './singleProject.parts';
import underConstruction from '../../../assets/projectsIcons/underConstruction.png';
import { ProjectsContext } from '../../../contexts/ProjectsContext';
import gsap from 'gsap';

const SingleProject = ({ currentProject, children }) => {
  const { setIsModalOpen, setCurrentProject } = useContext(ProjectsContext);
  const projectRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
    setCurrentProject(currentProject);
    // document.querySelector('body').style.overflow = 'hidden';
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
      <P.TitleOfProject>{children}</P.TitleOfProject>
      {!!currentProject.link || (
        <P.UCBadge
          src={underConstruction}
          alt="project is under construction"
        />
      )}
    </P.Project>
  );
};

export default SingleProject;
