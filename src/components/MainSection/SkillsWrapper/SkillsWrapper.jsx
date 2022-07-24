import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import InfoBubble from '../../generics/InfoBubble';
import SkillBar from '../../generics/SkillBar';
import { SKILL_BUNDLE } from '../../../constants';
import * as P from './skillsWrapper.parts';

const SkillsWrapper = () => {
    const [visibleModalIndex, setVisibleModalIndex] = useState(null);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

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

    const toggleDisplaySideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const infoIcon = <FontAwesomeIcon icon={faEllipsisH} />;

    const renderListOfSkills = () => {
        return SKILL_BUNDLE.map((skill, index) => {
            const isModalVisible = index === visibleModalIndex;

            return (
                <SkillBar skill={skill} key={skill.id}>
                    <P.SkillTitle>{skill.name}</P.SkillTitle>
                    <P.SkillAdvancementInfo>
                        <div onClick={(e) => e.stopPropagation()}>
                            <P.InfoIconLink
                                data-iconid={skill.id}
                                onClick={() =>
                                    setVisibleModalIndex(
                                        isModalVisible ? null : index
                                    )
                                }
                            >
                                {infoIcon}
                            </P.InfoIconLink>
                        </div>
                        {`${skill.advancement * 10}%`}
                    </P.SkillAdvancementInfo>
                    {isModalVisible && (
                        <div onClick={(e) => e.stopPropagation()}>
                            <InfoBubble skill={skill} />
                        </div>
                    )}
                </SkillBar>
            );
        });
    };

    return (
        <P.SkillContainer
            as={motion.div}
            transition={{ duration: 1 }}
            layout="position"
            isSideMenuOpen={isSideMenuOpen}
        >
            <P.SkillLabel
                isSideMenuOpen={isSideMenuOpen}
                onClick={toggleDisplaySideMenu}
            >
                umiejętności
            </P.SkillLabel>
            {renderListOfSkills()}
        </P.SkillContainer>
    );
};

export default SkillsWrapper;
