import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import { theme } from "common/theme";

const StyledAddContactBtn = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const StyledSearchContactByName = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledSearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledSearchContactInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

export default function ContactsAppBar() {
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isShowAddContactBtn, setIsShowAddContactBtn] = useState(true);

  const onSearchContactFocus = () => {
    if (!isMobileScreen) return;

    setIsShowAddContactBtn(false);
  };

  const onSearchContactBlur = (e) => {
    if (!isMobileScreen) return;

    setIsShowAddContactBtn(true);
    e.target.value = "";
  };

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          {isShowAddContactBtn && (
            <StyledAddContactBtn
              color="secondary"
              aria-label="add contact"
              sx={{ opacity: "0.8" }}
            >
              <AddIcon />
            </StyledAddContactBtn>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <StyledSearchContactByName>
            <StyledSearchIconWrapper>
              <SearchIcon />
            </StyledSearchIconWrapper>
            <StyledSearchContactInput
              placeholder="Search contact"
              inputProps={{ "aria-label": "Search contact by name" }}
              onFocus={onSearchContactFocus}
              onBlur={onSearchContactBlur}
            />
          </StyledSearchContactByName>
        </Toolbar>
      </AppBar>
    </>
  );
}
