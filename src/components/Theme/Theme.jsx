import { ThemeProvider } from 'styled-components';
import personalPhotoImage from '../../assets/personalPng.png';

const THEME = {
    //TODO changed names of colours for schema like gray-100, gray-300
    personalPhoto: personalPhotoImage,

    darkOrange: 'rgb(209, 41, 23)',

    yellow: 'rgb(212, 210, 11)',

    green: 'rgb(0, 189, 60)',

    black: 'rgb(26, 26, 26)',
    white: 'rgb(255, 253, 250)',

    beige: 'rgba(234, 218, 168, 0.2)',

    brighterGray: 'rgb(221, 221, 221)',
    gray: 'rgb(119, 119, 119)',
    darkerGray: 'rgb(102, 102, 102)',
    darkGray: 'rgb(62, 62, 62)',

    lightBlue: 'rgb(139, 169, 232)',
    brighterBlue: 'rgb(99, 129, 192)',
    blue: 'rgb(59, 89, 152)',

    pink: 'rgb(255, 147, 147)',
    brighterPink: 'rgb(255, 187, 187)',

    mint: 'rgb(98, 217, 199)',
    dimMint: 'rgba(98, 217, 199, 0.4)',

    darkenedBackground: 'rgba(0,0,0,0.9)',
    dimBackground: 'rgba(0,0,0,0.2)',
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export default Theme;
