import { TIMELINE_ITEMS } from '../../constants';
import TimelineItem from './TimelineItem/TimelineItem';
import './timeline.css';

const Timeline = () =>
    TIMELINE_ITEMS.length > 0 && (
        <div className="timeline-container">
            {TIMELINE_ITEMS.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;
