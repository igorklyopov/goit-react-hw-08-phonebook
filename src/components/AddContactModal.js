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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { addContact } from "redux/contacts/contactsOperations";
import { getContacts } from "redux/contacts/contactsSelectors";

export default function AddContactModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // const contactInitialValues = {
  //   name: "",
  //   number: "",
  // };

  const onAddContactModalClose = () => {
    onClose(false);
  };

  const onInputChange = (e) => {
    if (e.target.id === "contact-name") setName(e.target.value);
    if (e.target.id === "contact-phone-number") setNumber(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const duplicateContactName = contacts.find(
      (contact) => contact.name === name
    );
    const duplicateContactNumber = contacts.find(
      (contact) => contact.number === number
    );

    if (duplicateContactName) {
      alert(`${name} is already in contacts!`);
      reset();
      return;
    }
    if (duplicateContactNumber) {
      alert(
        `${number} is already in contacts! (${duplicateContactNumber.name} has this number)`
      );
      reset();
      return;
    }

    const contactData = {
      name,
      number,
    };

    dispatch(addContact(contactData));

    reset();

    // onClose(false);
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={onAddContactModalClose} fullWidth>
        <IconButton
          aria-label="close"
          onClick={onAddContactModalClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {/* <DialogTitle id="add-edit-contact-form-title">
          {contact ? "Editing contact" : "Adding contact"}
        </DialogTitle> */}
        <DialogTitle>Adding contact</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="contact-name"
            label="Name"
            type="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов, не должно начинаться или оканчиваться пробелом. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            fullWidth
            variant="standard"
            sx={{ backgroundColor: "#ffffff" }}
            value={name}
            onChange={onInputChange}
          />
          <TextField
            margin="dense"
            id="contact-phone-number"
            label="Number"
            type="tel"
            fullWidth
            variant="standard"
            sx={{
              backgroundColor: "#ffffff",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onFormSubmit} sx={{ backgroundColor: "#ffffff" }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
