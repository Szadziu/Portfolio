import { createContext, useState } from 'react';

export const ProjectsContext = createContext({});

const ProjectsContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const value = {
    isModalOpen,
    setIsModalOpen,
    currentProject,
    setCurrentProject,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
