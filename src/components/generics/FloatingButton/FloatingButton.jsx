import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import floatingButtonImage from '../../../assets/upArrow.png';
import { useWindowSize } from '../../../hooks/useWindowSize';

import * as P from './floatingButton.parts';

const FloatingButton = () => {
  const [visible, setVisible] = useState(false);

  const { width } = useWindowSize();
  const floatingButtonXOffset = Math.max((width - 1600) / 2, 20);
  console.log({ floatingButtonXOffset });

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

  return createPortal(
    <P.Button
      visible={visible}
      onClick={scrollToTop}
      image={floatingButtonImage}
      disabled={!visible}
      xOffset={floatingButtonXOffset}
    />,
    document.getElementById('floating-button')
  );
};

export default FloatingButton;
