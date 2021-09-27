import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2a9d8f",
      contrastText: "#fffffe",
    },
    secondary: {
      main: "#e76f51",
    },
    background: {
      default: "#e9c46a",
      paper: "#2a9d8f",
      light: "#fffffe",
    },
    text: {
      primary: "#021d26",
      secondary: "#fffffe",
    },
  },
  typography: {
    fontFamily: "Oswald",
  },
});

export { theme };

// import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

// const theme = createTheme({
//   palette: {
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: "#eebbc3",
//       dark: "#f582ae",
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       light: "#0066ff",
//       main: "#0044ff",
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: "#ffcc00",
//     },
//     darkBg: {
//       main: "#232946",
//       contrastText: "#fff",
//     },
//     // Used by `getContrastText()` to maximize the contrast between
//     // the background and the text.
//     contrastThreshold: 3,
//     // Used by the functions below to shift a color's luminance by approximately
//     // two indexes within its tonal palette.
//     // E.g., shift from Red 500 to Red 300 or Red 700.
//     tonalOffset: 0.2,
//   },
// });
