import { useState } from 'react';
import styled from 'styled-components';

const DefenderOfDimensions = () => {
  const checkInitialDimensions = () => {
    if (window.innerWidth >= 320 && window.innerHeight >= 658) return true;
    return false;
  };
  const [isDimensionsCorrect, setIsDimensionsCorrect] = useState(
    checkInitialDimensions()
  );

  window.addEventListener('resize', function () {
    setIsDimensionsCorrect(checkInitialDimensions());
  });

  return (
    !isDimensionsCorrect && (
      <Defender>Dostosowano dla rozdzielczości minimum : 320 x 658</Defender>
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
