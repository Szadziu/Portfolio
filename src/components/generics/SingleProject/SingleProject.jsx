import { useContext, useRef } from 'react';
import * as P from './singleProject.parts';
import underConstruction from '../../../assets/projectsIcons/underConstruction.png';
import { ProjectsContext } from '../../../contexts/ProjectsContext';
import gsap from 'gsap';

const SingleProject = ({ id, img, done, link, children }) => {
  const { setIsModalOpen } = useContext(ProjectsContext);
  const projectRef = useRef();

  const openModal = async () => {
    await gsap.to(projectRef.current, {
      duration: 0.4,
      translateY: '100%',
    });
    setIsModalOpen(true);
    document.querySelector('body').style.overflow = 'hidden';
  };

  return (
    <P.Project
      key={id}
      thumbnail={img}
      done={done}
      href={link}
      target="_blank"
      onClick={openModal}
      ref={projectRef}
    >
      <P.TitleOfProject>{children}</P.TitleOfProject>
      {!!link || (
        <P.UCBadge
          src={underConstruction}
          alt="project is under construction"
        />
      )}
    </P.Project>
  );
};

export default SingleProject;
