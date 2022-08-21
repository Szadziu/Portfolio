import { useEffect, useState } from 'react';
import * as P from './sectionWrapper.parts';

const SectionWrapper = ({ children, bgColor, ...restProps }) => {
    const [minHeight, setMinHeight] = useState(0);

    useEffect(() => {
        setMinHeight(window.innerHeight);
    }, []);

    return (
        <P.Wrapper bgColor={bgColor} minHeight={minHeight} {...restProps}>
            {children}
        </P.Wrapper>
    );
};

export default SectionWrapper;
