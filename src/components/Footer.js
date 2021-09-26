import * as React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Copyright } from "./Copyright";

const theme = createTheme();

export default function Footer() {
  return (
    <footer>
      <Container component="div" maxWidth="xs">
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </footer>
  );
}
