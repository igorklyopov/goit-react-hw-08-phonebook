import { useState } from "react";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import ContactsFilter from "./ContactsFilter";

const AddContactBtn = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
  opacity: "0.8",
});

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
