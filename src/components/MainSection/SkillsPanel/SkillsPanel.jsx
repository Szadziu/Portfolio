import {useCallback, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import SkillBar from '../../generics/SkillBar';
import {SKILLS_BUNDLE} from '../../../constants';
import * as P from './skillsPanel.parts';

const SkillsPanel = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
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
    }, [visibleModalIndex, closeModal]);

    const toggleDisplaySideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const renderListOfSkills = () => {
        return SKILLS_BUNDLE.map((skill, index) => {
            const isModalVisible = index === visibleModalIndex;

            return (
                <SkillBar
                    currIndex={index}
                    skill={skill}
                    key={skill.id}
                    isSkillDetailsDialogVisible={isModalVisible}
                    setVisibleModalIndex={setVisibleModalIndex}
                />
            );
        });
    };

    return (
        <P.SkillsContainer as={motion.div} transition={{duration: 1}} layout="position" isSideMenuOpen={isSideMenuOpen}>
            <P.SkillLabel isSideMenuOpen={isSideMenuOpen} onClick={toggleDisplaySideMenu}>
                umiejętności
            </P.SkillLabel>
            {renderListOfSkills()}
        </P.SkillsContainer>
    );
};

export default SkillsPanel;
