import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogActions,
  Button,
  IconButton,
  TextField,
  DialogContent,
  DialogTitle,
  DialogContentText,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { addContact } from "redux/contacts/contactsOperations";
import { getContacts } from "redux/contacts/contactsSelectors";

import { getDuplicateContact } from "utils/getDuplicateContact";
import AddContactNotifications from "./AddContactNotifications";

import { theme } from "common/theme";
import { StyledFormInput } from "./StyledFormInput";

import { useForm, Controller, setValue } from "react-hook-form";

import AddContactForm from "./Form";

const AddContactModalCommonStyles = {
  backgroundColor: theme.palette.background.default,
};

export default function AddContactModal({ isOpen, onClose }) {
  const [isDuplicateContact, setIsDuplicateContact] = useState(null);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onAddContactModalClose = () => {
    onClose(false);
    setIsDuplicateContact(null);
  };

  const onAddContactFormSubmit = (data) => {
    const duplicateContact = getDuplicateContact(
      contacts,
      data.name,
      data.number
    );
    setIsDuplicateContact(duplicateContact);

    if (!duplicateContact) {
      dispatch(addContact(data));
    } else {
      return;
    }
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onAddContactModalClose} fullWidth>
        <IconButton
          aria-label="close"
          onClick={onAddContactModalClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.primary.main,
          }}
        >
          <CloseIcon />
        </IconButton>
        {/* <DialogTitle id="add-edit-contact-form-title">
          {contact ? "Editing contact" : "Adding contact"}
        </DialogTitle> */}
        <DialogTitle
          sx={{
            ...AddContactModalCommonStyles,
            color: theme.palette.primary.main,
          }}
        >
          Adding contact
        </DialogTitle>
        <DialogContent
          sx={{
            ...AddContactModalCommonStyles,
          }}
        >
          <AddContactForm onSubmit={onAddContactFormSubmit} />
          <AddContactNotifications
            isDuplicateContact={isDuplicateContact}
            contacts={contacts}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
