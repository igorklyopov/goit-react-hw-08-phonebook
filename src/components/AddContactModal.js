import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, IconButton, DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { addContact, editContact } from "redux/contacts/contactsOperations";
import { getContacts } from "redux/contacts/contactsSelectors";
import { getDuplicateContact } from "utils/getDuplicateContact";
import { theme } from "common/theme";
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
  const [isContactSaved, setIsContactSaved] = useState(false);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onAddContactModalClose = () => {
    onClose(false);
    setIsDuplicateContact(null);
    setCurrentContactId(null);
    setIsContactSaved(false);
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
      ).unwrap();
      setIsContactSaved(true);

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
        <DialogTitle
          id="add-edit-contact-form-title"
          sx={{
            ...AddContactModalCommonStyles,
            color: theme.palette.primary.main,
          }}
        >
          {currentContactId ? "Editing contact" : "Adding contact"}
        </DialogTitle>
        <DialogContent
          sx={{
            ...AddContactModalCommonStyles,
          }}
        >
          <AddContactForm
            onSubmit={onAddContactFormSubmit}
            currentContactId={currentContactId}
            isContactSaved={isContactSaved}
            setIsContactSaved={setIsContactSaved}
          />
          <AddContactNotifications
            currentContactId={currentContactId}
            isDuplicateContact={isDuplicateContact}
            contacts={contacts}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
