import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {" © "}
      <Link
        color="inherit"
        href="https://github.com/igorklyopov"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        by Igor Klyopov
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export { Copyright };
