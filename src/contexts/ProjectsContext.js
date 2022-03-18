import { createContext, useState } from 'react';

export const ProjectsContext = createContext({});

const ProjectsContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentProject, setCurrentProject] = useState(null);

  const value = {
    isModalOpen,
    setIsModalOpen,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
