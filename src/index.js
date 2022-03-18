import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import BackgroundContextProvider from './contexts/BackgroundContext';
import ProjectsContextProvider from './contexts/ProjectsContext';

ReactDOM.render(
  <React.StrictMode>
    <BackgroundContextProvider>
      <ProjectsContextProvider>
        <App />
      </ProjectsContextProvider>
    </BackgroundContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
