import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {useTheme} from 'styled-components';
import gsap from 'gsap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import SkillDescriptionDialog from '../SkillDescriptionDialog';
import * as P from './skillBar.parts';

const SkillBar = ({skill, currIndex, isSkillDetailsDialogVisible, setVisibleModalIndex}) => {
    const [ref, inView, entry] = useInView();
    const theme = useTheme();

    const generateSkillLevel = () => {
        const advancementLevel = [];
        let boxHeight = 2;

        const addBoxSkillChartElement = (color, height, i) => {
            advancementLevel.push(<P.SkillChartElement key={i} color={color} height={height} />);
        };

        for (let i = 0; i < skill.advancement; i++) {
            let color;
            boxHeight += 2;
            if (advancementLevel.length <= 2) {
                color = theme.blue_200;
                addBoxSkillChartElement(color, boxHeight, i);
            } else if (advancementLevel.length <= 5) {
                color = theme.blue_300;
                addBoxSkillChartElement(color, boxHeight, i);
            } else if (advancementLevel.length <= 9) {
                color = theme.blue_400;
                addBoxSkillChartElement(color, boxHeight, i);
            }
        }
        return advancementLevel;
    };

    const skillGraphElementsAnimation = () => {
        gsap.to(entry.target.children, {scale: 1, stagger: 0.5});
    };

    useEffect(() => {
        if (inView) {
            skillGraphElementsAnimation();
        }
    }, [inView]);

    const toggleSkillDetailsDialog = (e) => {
        e.stopPropagation();
        setVisibleModalIndex(isSkillDetailsDialogVisible ? null : currIndex);
    };

    const closeSkillDetailsDialog = () => {
        setVisibleModalIndex(null);
    }

    return (
        <P.SkillBarContainer>
            <P.SkillDetailsContainer>
                <P.SkillTitle>{skill.name}</P.SkillTitle>
                <P.SkillDetailsIcon data-iconid={skill.id} onClick={toggleSkillDetailsDialog}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </P.SkillDetailsIcon>
                <P.SkillPercentage>{`${skill.advancement * 10}%`}</P.SkillPercentage>
                {isSkillDetailsDialogVisible && <SkillDescriptionDialog skill={skill} currIndex={currIndex} closeModal={closeSkillDetailsDialog}/>}
            </P.SkillDetailsContainer>
            <P.SkillChartElementsContainer ref={ref}>{generateSkillLevel()}</P.SkillChartElementsContainer>
        </P.SkillBarContainer>
    );
};

export default SkillBar;
