import { ThemeProvider } from 'styled-components';
import personalPhotoIcon from '../../assets/personalPhoto.png';

const THEME = {
  landingSectionBackground: personalPhotoIcon,
  redBlueGradient: 'linear-gradient(#780206, #061161)',
  darkGreenGradient: 'linear-gradient(to bottom, #000, #0f9b0f)',
  darkOrange: '#D12917',
  yellow: '#D4D20B',
  green: '#00BD3C',
  fontColor: 'rgb(26, 26, 26)',
  black: 'rgb(26, 26, 26)',
  gray: '#777',
  mint: '#62D9C7',
  darkenedBackground: 'rgba(0,0,0,0.9)',
  fontSizes: {
    default: '1.5rem',
    small: '1rem',
    medium: '2rem',
    large: '3rem',
    huge: '4rem',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export default Theme;
