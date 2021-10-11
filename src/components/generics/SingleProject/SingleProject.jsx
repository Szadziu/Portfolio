import { setRandomColor } from "../../../utils";
import * as P from "./parts";

const SingleProject = ({ children }) => {
  return (
    <P.Project href="www.google.pl" color={setRandomColor()}>
      {children}
    </P.Project>
  );
};

export default SingleProject;
