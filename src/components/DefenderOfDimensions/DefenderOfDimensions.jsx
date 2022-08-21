import { useState } from 'react';
import { Defender } from './DefenderOfDimensions.parts';

export const checkInitialDimensions = (min, max) => {
    if (window.innerWidth >= min && window.innerHeight >= max) return true;
    return false;
};
const DefenderOfDimensions = ({ x, y }) => {
    const [isDimensionsCorrect, setIsDimensionsCorrect] = useState(
        checkInitialDimensions(x, y)
    );

    window.addEventListener('resize', function () {
        setIsDimensionsCorrect(checkInitialDimensions(x, y));
    });

    return (
        !isDimensionsCorrect && (
            <Defender>
                Dostosowano dla rozdzielczości minimum : {x} x {y}
            </Defender>
        )
    );
};

export default DefenderOfDimensions;
