import {motion} from 'framer-motion';
import React from 'react';
import {useWindowSize} from '../../hooks/useWindowSize';
import {TIMELINE_ITEMS} from '../../constants';
import * as P from './Timeline.parts';

const HorizontalTimeline = () => {
    const {height} = useWindowSize();

    const renderTimelineItems = () => {
        return TIMELINE_ITEMS.map((item, index) => {
            return <P.TimelineItem key={index} value={item.value} date={item.date} text={item.text} />;
        });
    };

    return (
        <P.Timeline as={motion.ul} transition={{duration: 1}} currentScreenHeight={height}>
            {renderTimelineItems()}
        </P.Timeline>
    );
};

export default HorizontalTimeline;
