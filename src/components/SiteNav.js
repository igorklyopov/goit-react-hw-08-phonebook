import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";

import { getIsLoggedIn } from "redux/auth/authSelectors";
import { theme } from "common/theme";
import NavList from "./NavList";
import NavItem from "./NavItem";
import NavLinkRouter from "./NavLinkRouter";
import Logo from "./Logo";

export default function SiteNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isAfterSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <NavList className="list">
      <NavItem>
        <NavLinkRouter
          homeLink
          to="/"
          className="link"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Logo />
          {isAfterSmallScreen && "Phonebook"}
        </NavLinkRouter>
      </NavItem>
      {isLoggedIn && (
        <NavItem>
          <NavLinkRouter to="/contacts" className="link">
            Contacts
          </NavLinkRouter>
        </NavItem>
      )}
    </NavList>
  );
}
