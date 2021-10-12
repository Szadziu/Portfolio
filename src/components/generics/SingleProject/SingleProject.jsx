import { setRandomColor } from "../../../utils";
import * as P from "./parts";

const SingleProject = ({ children, link }) => {
  return (
    <P.Project href={link} color={setRandomColor()}>
      {children}
    </P.Project>
  );
};

export default SingleProject;
