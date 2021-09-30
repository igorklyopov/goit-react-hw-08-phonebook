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
import ContactsFilter from "./ContactsFilter";

const AddContactBtn = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const SearchContactByName = styled("div")(({ theme }) => ({
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

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchContactInput = styled(InputBase)(({ theme }) => ({
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

export default function ContactsBar({ openAddContactModal }) {
  const [isShowAddContactBtn, setIsShowAddContactBtn] = useState(true);

  const addContactBtnClick = () => {
    openAddContactModal(true);
  };

  return (
    <>
      <AppBar
        component="div"
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          {isShowAddContactBtn && (
            <AddContactBtn
              color="secondary"
              aria-label="add contact"
              sx={{ opacity: "0.8" }}
              onClick={addContactBtnClick}
            >
              <AddIcon />
            </AddContactBtn>
          )}
          <ContactsFilter showAddContactBtn={setIsShowAddContactBtn} />
        </Toolbar>
      </AppBar>
    </>
  );
}
