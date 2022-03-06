import * as P from "./parts";
import underConstruction from "../../../assets/projectsIcons/underConstruction.png";

const SingleProject = ({ id, children, img, done, link }) => {
  return (
    <P.Project key={id} thumbnail={img} done={done} href={link} target="_blank">
      {children}
      {done || (
        <P.UCBadge
          src={underConstruction}
          alt="project is under construction"
        />
      )}
    </P.Project>
  );
};

export default SingleProject;
