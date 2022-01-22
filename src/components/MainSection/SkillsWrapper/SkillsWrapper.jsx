import * as P from './parts';
import { useState, useEffect, useCallback } from 'react';
import SkillBar from '../../generics/SkillBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfo } from '@fortawesome/free-solid-svg-icons';
import { SKILL_BUNDLE } from '../../../constants';
import InfoBubble from '../../generics/InfoBubble';

const SkillsWrapper = () => {
  const [isDisplayInfoBubble, setIsDisplayInfoBubble] = useState(false);

  //! test
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

  // const cogwheelIcon = <FontAwesomeIcon icon={faCog} spin />;
  const cogwheelIcon = <FontAwesomeIcon icon={faCog} spin />;
  const infoIcon = <FontAwesomeIcon icon={faInfo} />;

  // const toggleDisplayInfoBubble = (e, id) => {
  //   if (id === +e.currentTarget.getAttribute('data-iconid'))
  //     setIsDisplayInfoBubble((value) => !value);
  // };

  const renderListOfSkills = () => {
    return SKILL_BUNDLE.map((skill, index) => (
      // <P.SkillsList>
      <SkillBar
        // isVisible={isDisplayInfoBubble}
        // setIsVisible={setIsDisplayInfoBubble}
        skill={skill}
        key={skill.id}
      >
        <P.SkillTitle>{skill.name}</P.SkillTitle>
        <P.SkillAdvancementInfo>
          {cogwheelIcon}
          {`${skill.advancement * 10}%`}
          {cogwheelIcon}
        </P.SkillAdvancementInfo>

        <div onClick={(e) => e.stopPropagation()}>
          <P.InfoIconLink
            data-iconid={skill.id}
            // onClick={(e) => toggleDisplayInfoBubble(e, skill.id)}
            onClick={() =>
              setVisibleModalIndex(index === visibleModalIndex ? null : index)
            }
          >
            {infoIcon}
          </P.InfoIconLink>
        </div>

        {/* {isDisplayInfoBubble && (
          <InfoBubble description={skill.desc} id={skill.id} />
        )} */}
        {index === visibleModalIndex && (
          <div onClick={(e) => e.stopPropagation()}>
            <InfoBubble description={skill.desc} id={skill.id} />
          </div>
        )}
      </SkillBar>
      // </P.SkillsList>
    ));
  };
  return <P.SkillContainer>{renderListOfSkills()}</P.SkillContainer>;
};

export default SkillsWrapper;
