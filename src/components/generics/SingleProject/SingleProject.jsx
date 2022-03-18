import { useContext } from 'react';
import * as P from './singleProject.parts';
import underConstruction from '../../../assets/projectsIcons/underConstruction.png';
import { ProjectsContext } from '../../../contexts/ProjectsContext';

const SingleProject = ({ id, img, done, link, children }) => {
  const { setIsModalOpen } = useContext(ProjectsContext);

  return (
    <P.Project
      key={id}
      thumbnail={img}
      done={done}
      href={link}
      target="_blank"
      onClick={() => setIsModalOpen(true)}
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
