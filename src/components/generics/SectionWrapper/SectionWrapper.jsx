import {useEffect, useState} from 'react';
import * as P from './sectionWrapper.parts';

const MAX_SECTION_HEIGHT = 1000;

const SectionWrapper = ({children, bgColor, ...restProps}) => {
    const [minHeight, setMinHeight] = useState(0);

    useEffect(() => {
        setMinHeight(window.innerHeight);
    }, []);

    return (
        <P.Wrapper bgColor={bgColor} maxHeight={MAX_SECTION_HEIGHT} minHeight={minHeight} {...restProps}>
            {children}
        </P.Wrapper>
    );
};

export default SectionWrapper;
