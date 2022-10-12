import { useState, useEffect, useCallback } from 'react';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    const getWindowSizes = useCallback(function () {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    useEffect(() => {
        getWindowSizes();
    }, [getWindowSizes]);

    useEffect(() => {
        window.addEventListener('resize', getWindowSizes);

        return () => {
            window.removeEventListener('resize', getWindowSizes);
        };
    }, [getWindowSizes]);

    return windowSize;
};
