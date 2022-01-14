import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import floatingButtonImage from '../../assets/upArrow.png';
import * as P from './parts';

const FloatingButton = () => {
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) setVisible(true);
    else if (scrolled <= 300) setVisible(false);
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
    />,
    document.getElementById('floating-button')
  );
};

export default FloatingButton;
