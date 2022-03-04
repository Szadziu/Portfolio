import { ThemeProvider } from "styled-components";
import personalPhotoImage from "../../assets/personalPhoto.png";

const THEME = {
  personalPhoto: personalPhotoImage,

  darkOrange: "rgb(209, 41, 23)",

  yellow: "rgb(212, 210, 11)",

  green: "rgb(0, 189, 60)",

  black: "rgb(26, 26, 26)",
  white: "rgb(255, 253, 250)",

  brighterGray: "rgb(221, 221, 221)",
  gray: "rgb(119, 119, 119)",
  darkerGray: "rgb(102, 102, 102)",
  darkGray: "rgb(62, 62, 62)",

  blue: "rgb(59, 89, 152)",
  brighterBlue: "rgb(99, 129, 192)",

  pink: "rgb(255, 147, 147)",
  brighterPink: "rgb(255, 187, 187)",

  mint: "rgb(98, 217, 199)",

  darkenedBackground: "rgba(0,0,0,0.9)",
  dimBackground: "rgba(0,0,0,0.2)",
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export default Theme;
