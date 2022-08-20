import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

import floatingButtonImage from '../../../assets/upArrow.png';
import { useWindowSize } from '../../../hooks/useWindowSize';

import * as P from './floatingButton.parts';

const FloatingButton = () => {
    const [visible, setVisible] = useState(false);

    const { width } = useWindowSize();
    const floatingButtonXOffset = useMemo(
        () => Math.max((width - 1600) / 2, 20),
        [width]
    );

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    const toggleVisible = () => {
        const scrollY = document.documentElement.scrollTop;
        setVisible(scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!visible) {
        return null;
    }

    return createPortal(
        <P.Button
            onClick={scrollToTop}
            image={floatingButtonImage}
            xOffset={floatingButtonXOffset}
            visible
        />,
        document.getElementById('floating-button')
    );
};

export default FloatingButton;
