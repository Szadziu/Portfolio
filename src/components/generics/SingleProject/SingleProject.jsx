import * as P from "./singleProject.parts";
import underConstruction from "../../../assets/projectsIcons/underConstruction.png";

const SingleProject = ({ id, children, img, done, link }) => {
  return (
    <P.Project key={id} thumbnail={img} done={done} href={link} target="_blank">
      <P.TitleOfProject>{children}</P.TitleOfProject>
      {!!link || (
        <P.UCBadge
          src={underConstruction}
          alt="project is under construction"
        />
      )}
    </P.Project>
  );
};

export default SingleProject;
