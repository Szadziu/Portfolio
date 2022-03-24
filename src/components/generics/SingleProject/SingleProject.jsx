import { useContext } from 'react';
import * as P from './singleProject.parts';
import underConstruction from '../../../assets/projectsIcons/underConstruction.png';
import { ProjectsContext } from '../../../contexts/ProjectsContext';

const SingleProject = ({ id, img, done, link, children }) => {
  const { setIsModalOpen } = useContext(ProjectsContext);
  const openModal = () => {
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
