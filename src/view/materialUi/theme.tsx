//MUI v5 code:
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//@ts-ignore
// import RalewayWoff2 from "./fonts/Raleway.ttf";

export const customTheme = createTheme({
  typography: {
    fontFamily: "Raleway, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  palette: {
    primary: {
      light: "#90E0EF",
      main: "#1FBBD6",
      dark: "#167A8B",
      contrastText: "#fff",
    },
    secondary: {
      light: "#E4DFD3",
      main: "#E1D5B7",
      dark: "#D0BB8B",
      contrastText: "#000",
    },
    // success: {},
    // info: {},
    // warning: {},
    // error: {},
  },
});

/**
 * primary -> pacific blue
 * secondary -> dutch white
 */
