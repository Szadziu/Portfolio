import * as P from './parts';
import { useState } from 'react';
import SkillBar from '../../generics/SkillBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfo } from '@fortawesome/free-solid-svg-icons';
import { SKILL_BUNDLE } from '../../../constants';
import InfoBubble from '../../generics/InfoBubble';

const SkillsWrapper = () => {
  const [isDisplayInfoBubble, setIsDisplayInfoBubble] = useState(false);

  const cogwheelIcon = <FontAwesomeIcon icon={faCog} spin />;
  const infoIcon = <FontAwesomeIcon icon={faInfo} />;

  const toggleDisplayInfoBubble = (e, id) => {
    if (id === +e.currentTarget.getAttribute('data-iconid'))
      setIsDisplayInfoBubble((value) => !value);
  };

  const renderListOfSkills = () => {
    return SKILL_BUNDLE.map((skill) => (
      <P.SkillsList>
        <SkillBar
          // isVisible={isDisplayInfoBubble}
          // setIsVisible={setIsDisplayInfoBubble}
          skill={skill}
          key={skill.id}
        >
          {skill.name}
          {cogwheelIcon}
          {`${skill.advancement * 10}%`}
          {cogwheelIcon}
          <P.InfoIconLink
            data-iconid={skill.id}
            onClick={(e) => toggleDisplayInfoBubble(e, skill.id)}
          >
            {infoIcon}
          </P.InfoIconLink>
        </SkillBar>
        {isDisplayInfoBubble && (
          <InfoBubble description={skill.desc} id={skill.id} />
        )}
      </P.SkillsList>
    ));
  };
  return <P.SkillContainer>{renderListOfSkills()}</P.SkillContainer>;
};

export default SkillsWrapper;
