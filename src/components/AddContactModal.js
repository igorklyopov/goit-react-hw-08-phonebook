import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, IconButton, DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { addContact, editContact } from "redux/contacts/contactsOperations";
import { getContacts } from "redux/contacts/contactsSelectors";
import { theme } from "common/theme";
import { getDuplicateContact } from "utils/getDuplicateContact";
import AddContactForm from "./AddContactForm";
import AddContactNotifications from "./AddContactNotifications";

const AddContactModalCommonStyles = {
  backgroundColor: theme.palette.background.default,
};

export default function AddContactModal({
  isOpen,
  onClose,
  currentContactId,
  setCurrentContactId,
}) {
  const [isDuplicateContact, setIsDuplicateContact] = useState(null);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onAddContactModalClose = () => {
    onClose(false);
    setIsDuplicateContact(null);
    setCurrentContactId(null);
  };

  const onAddContactFormSubmit = (data) => {
    const duplicateContact = getDuplicateContact(
      contacts,
      data.name,
      data.number
    );
    setIsDuplicateContact(duplicateContact);

    if (currentContactId) {
      dispatch(
        editContact({
          id: currentContactId,
          ...data,
        })
      );

      return;
    }

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
          <AddContactForm
            onSubmit={onAddContactFormSubmit}
            currentContactId={currentContactId}
          />
          <AddContactNotifications
            isDuplicateContact={isDuplicateContact}
            contacts={contacts}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
