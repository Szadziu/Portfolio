import { ThemeProvider } from 'styled-components';

const THEME = {
    black_20: 'rgba(49,49,49,0.2)',
    black_50: 'rgba(49, 49, 49, 0.5)',
    black: 'rgb(49, 49, 49)',

    white_10: 'rgba(255, 253, 250, 0.1)',
    white: 'rgb(255, 253, 250)',

    beige_20: 'rgba(234, 218, 168, 0.2)',

    gray_200: 'rgb(221, 221, 221)',
    gray_300: 'rgb(119, 119, 119)',
    gray_400: 'rgb(102, 102, 102)',
    gray_500: 'rgb(62, 62, 62)',

    green_300: 'rgb(0, 189, 60)',

    blue_200: 'rgb(139, 169, 232)',
    blue_300: 'rgb(99, 129, 192)',
    blue_400: 'rgb(59, 89, 152)',

    pink_200: 'rgb(255, 187, 187)',
    pink_300: 'rgb(255, 147, 147)',

    mint_300: 'rgb(98, 217, 199)',
    mint_400: 'rgba(98, 217, 199, 0.4)',

    fontSize: {
        xxs: '1rem',
        xs: '1.2rem',
        s: '1.4rem',
        m: '1.6rem',
        l: '1.8rem',
        xl: '2.0rem',
        xxl: '2.4rem',
        xxxl: '2.8rem',
    },

    borderRadius: {
        s: '.2rem',
        m: '.4rem',
        l: '.6rem',
        xl: '.8rem',
        xxl: '1.0rem',
    },

    padding: {
        xs: '.2rem',
        s: '.4rem',
        m: '.8rem',
        l: '1.2rem',
        xl: '1.6rem',
        xxl: '2.4rem',
        xl3: '4.5rem',
    },

    margin: {
        xs: '.2rem',
        s: '.4rem',
        m: '.8rem',
        l: '1.2rem',
        xl: '1.6rem',
        xxl: '2.4rem',
    },

    letterSpacing: {
        xs: '.075rem',
        s: '.1rem',
        m: '.12rem',
        l: '.15rem',
        xl: '.18rem',
        xxl: '.2rem',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export default Theme;
