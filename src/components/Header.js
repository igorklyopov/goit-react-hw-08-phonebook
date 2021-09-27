import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

import { SiteNav } from "components/SiteNav";
import { AuthNav } from "components/AuthNav";
import { UserMenu } from "components/UserMenu";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Header(props) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Container>
            <SiteNav />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
