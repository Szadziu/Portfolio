import { motion } from 'framer-motion';
import React from 'react';
import * as P from './Timeline.parts';

const HorizontalTimeline = () => {
    return (
        <P.Timeline as={motion.ul} transition={{ duration: 1 }}>
            <P.TimelineItem
                value={15}
                date="01 Styczeń 2020 - obecnie"
                text="Kursy ● Nauka ● Projekty ● Portfolio"
            />
            <P.TimelineItem
                value={60}
                date="16 Maj 2022 - obecnie (6 msc)"
                text="Pravna Group ● Junior Frontend Developer"
            />
        </P.Timeline>
    );
};

export default HorizontalTimeline;
