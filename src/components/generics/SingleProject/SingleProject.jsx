import * as P from './parts';

const SingleProject = ({ children, onClick, thumbnail, done }) => {
  return (
    <P.Project
      disabled={!done}
      thumbnail={thumbnail}
      onClick={onClick}
      done={done}
    >
      {children}
    </P.Project>
  );
};

export default SingleProject;
