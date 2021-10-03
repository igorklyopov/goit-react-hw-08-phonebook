import { NavLink, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

import { theme } from "common/theme";

export default function NavLinkRouter({ children, homeLink, ...props }) {
  const location = useLocation();
  let activeNavLinkColor;

  location.pathname === "/"
    ? (activeNavLinkColor = theme.palette.background.default)
    : (activeNavLinkColor = "inherit");

  const commonNavLinkStyles = {
    "&:hover, &:focus": {
      color: theme.palette.background.default,
    },
    display: "flex",
    alignItems: "center",
    padding: "5px",
  };

  const activeNavLinkStyles = {
    "&.active": {
      color: theme.palette.background.default,
    },
  };

  const activeNavLinkHomeStyles = {
    "&.active": {
      color: activeNavLinkColor,
    },
  };

  return (
    <Typography
      component={NavLink}
      {...props}
      sx={
        homeLink
          ? {
              ...activeNavLinkHomeStyles,
              ...commonNavLinkStyles,
            }
          : { ...activeNavLinkStyles, ...commonNavLinkStyles }
      }
    >
      {children}
    </Typography>
  );
}
