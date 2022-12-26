import { motion } from 'framer-motion';
import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import * as P from './Timeline.parts';

const HorizontalTimeline = () => {
    const { height } = useWindowSize();

    return (
        <P.Timeline as={motion.ul} transition={{ duration: 1 }} currentScreenHeight={height}>
            <P.TimelineItem
                value={15}
                date="01 Styczeń 2020"
                text="Kursy ● Nauka ● Projekty ● Portfolio"
            />
            <P.TimelineItem
                value={60}
                date="16 Maj 2022"
                text="Pravna Group ● Junior Frontend Developer"
            />
        </P.Timeline>
    );
};

export default HorizontalTimeline;
