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
      accent: "#f4a261",
    },
    background: {
      default: "#e9c46a",
      paper: "#2a9d8f",
      light: "#fffffe",
    },
    text: {
      primary: "#264653",
      secondary: "#fffffe",
    },
  },
  typography: {
    fontFamily: "Oswald",
  },
});

export { theme };
