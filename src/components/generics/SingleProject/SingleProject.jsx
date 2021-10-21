import * as P from "./parts";

const SingleProject = ({ children, onClick }) => {
  return <P.Project onClick={onClick}>{children}</P.Project>;
};

export default SingleProject;
