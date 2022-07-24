import { useState } from 'react';
import styled from 'styled-components';

export const checkInitialDimensions = (min, max = 520) => {
    if (window.innerWidth >= min && window.innerHeight >= max) return true;
    return false;
};
const DefenderOfDimensions = () => {
    const [isDimensionsCorrect, setIsDimensionsCorrect] = useState(
        checkInitialDimensions(320)
    );

    window.addEventListener('resize', function () {
        setIsDimensionsCorrect(checkInitialDimensions(320));
    });

    return (
        !isDimensionsCorrect && (
            <Defender>
                Dostosowano dla rozdzielczości minimum : 320 x 520
            </Defender>
        )
    );
};

const Defender = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    padding: 0 20px;
    background-color: midnightblue;
    color: white;
    text-transform: uppercase;
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 3;
`;

export default DefenderOfDimensions;
