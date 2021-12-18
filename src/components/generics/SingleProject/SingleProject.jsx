import * as P from "./parts";

const SingleProject = ({ children, onClick, thumbnail }) => {
  return (
    <P.Project thumbnail={thumbnail} onClick={onClick}>
      {children}
    </P.Project>
  );
};

export default SingleProject;
