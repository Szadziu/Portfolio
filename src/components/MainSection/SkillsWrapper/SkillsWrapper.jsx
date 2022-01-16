import * as P from './parts';
import SkillBar from '../../generics/SkillBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { SKILL_BUNDLE } from '../../../constants';

const SkillsWrapper = () => {
  const cogwheelIcon = <FontAwesomeIcon icon={faCog} spin />;

  const renderListOfSkills = () => {
    return SKILL_BUNDLE.map((skill) => (
      <SkillBar skill={skill} key={skill.id}>
        {skill.name}
        {cogwheelIcon}
        {`${skill.advancement * 10}%`}
        {cogwheelIcon}
      </SkillBar>
    ));
  };
  return <P.SkillContainer>{renderListOfSkills()}</P.SkillContainer>;
};

export default SkillsWrapper;
