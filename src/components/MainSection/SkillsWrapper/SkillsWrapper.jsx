import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import InfoBubble from '../../generics/InfoBubble';
import SkillBar from '../../generics/SkillBar';

import { SKILL_BUNDLE } from '../../../constants';

import * as P from './skillsWrapper.parts';

const SkillsWrapper = () => {
  const [visibleModalIndex, setVisibleModalIndex] = useState(null);

  const closeModal = useCallback(() => {
    setVisibleModalIndex(null);
  }, []);

  useEffect(() => {
    if (visibleModalIndex !== null) {
      document.addEventListener('click', closeModal);
    } else {
      document.removeEventListener('click', closeModal);
    }
  }, [visibleModalIndex]);

  const cogwheelIcon = <FontAwesomeIcon icon={faCog} spin />;
  const infoIcon = <FontAwesomeIcon icon={faEllipsisH} />;

  const renderListOfSkills = () => {
    return SKILL_BUNDLE.map((skill, index) => (
      <SkillBar skill={skill} key={skill.id}>
        <P.SkillTitle>{skill.name}</P.SkillTitle>
        <P.SkillAdvancementInfo>
          <div onClick={(e) => e.stopPropagation()}>
            <P.InfoIconLink
              data-iconid={skill.id}
              onClick={() =>
                setVisibleModalIndex(index === visibleModalIndex ? null : index)
              }
            >
              {infoIcon}
            </P.InfoIconLink>
          </div>
          {`${skill.advancement * 10}%`}
        </P.SkillAdvancementInfo>
        {index === visibleModalIndex && (
          <div onClick={(e) => e.stopPropagation()}>
            <InfoBubble skill={skill} />
          </div>
        )}
      </SkillBar>
    ));
  };
  return <P.SkillContainer>{renderListOfSkills()}</P.SkillContainer>;
};

export default SkillsWrapper;
