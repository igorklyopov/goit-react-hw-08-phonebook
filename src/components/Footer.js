import * as React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Copyright } from "./Copyright";
import { Box } from "@mui/system";

const theme = createTheme();

export default function Footer() {
  return (
    <Box component="footer" bgcolor={"primary.main"}>
      {/* <footer> */}
      <Container component="div" maxWidth="xs">
        <Copyright sx={{ pt: 1, pb: 1 }} />
      </Container>
      {/* </footer> */}
    </Box>
  );
}
