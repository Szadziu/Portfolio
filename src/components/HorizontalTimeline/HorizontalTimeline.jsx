import React from 'react';
import * as P from './HorizontalTimeline.parts';

const HorizontalTimeline = () => {
    return (
        <P.Timeline>
            <P.TimelineItem
                value={10}
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
