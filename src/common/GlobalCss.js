import { theme } from "../common/theme";

const GlobalCSS = {
  html: {
    height: "100%",
  },
  body: {
    height: "100%",
    margin: 0,
    fontFamily: `"Oswald", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif`,
    lineHeight: "1.3",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  footer: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
  },
  "#root": {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },
  main: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "auto",
  },

  ".list": {
    listStyle: "none",
    marginTop: 0,
    paddingLeft: 0,
  },
  ".link": {
    cursor: "pointer",
    textDecoration: "none",
    fontStyle: "normal",
    color: "inherit",
    outline: "none",
  },
  ".button": {
    cursor: "pointer",
    outline: "none",
    border: "none",
    fontFamily: "inherit",
    lineHeight: "inherit",
  },
  ".visuallyHidden": {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: 0,
    overflow: "hidden",
    border: 0,
    clip: "rect(0 0 0 0)",
  },
};

export { GlobalCSS };
