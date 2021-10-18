import { setRandomColor } from "../../../utils/setRandomColor";
import * as P from "./parts";

const SingleProject = ({ children, onClick }) => {
  return (
    <P.Project onClick={onClick} color={setRandomColor()}>
      {children}
    </P.Project>
  );
};

export default SingleProject;
