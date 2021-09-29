import { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import { Copyright } from "./Copyright";
import { Box } from "@mui/system";
import { useLocation } from "react-router";

export default function Footer() {
  const location = useLocation();
  const [footerPaddingBottom, setFooterPaddingBottom] = useState(1);

  const locatedOnContactsPage = location.pathname === "/contacts";

  useEffect(() => {
    locatedOnContactsPage
      ? setFooterPaddingBottom(11)
      : setFooterPaddingBottom(1);
  }, [locatedOnContactsPage]);

  return (
    <Box component="footer" bgcolor={"primary.main"} pb={footerPaddingBottom}>
      <Container component="div" maxWidth="xs">
        <Copyright sx={{ pt: 1, pb: 1 }} />
      </Container>
    </Box>
  );
}
