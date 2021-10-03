import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { shadows } from "@mui/system";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { deleteContact, getContacts } from "redux/contacts/contactsOperations";
import { getFilteredContacts } from "redux/contacts/contactsSelectors";

const ContactsItem = styled(Grid)(({ theme }) => ({
  ...theme.typography.body2,
  direction: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "5px",
  marginBottom: "5px",
}));

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContactBtnClick = (id) => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Grid container component="ul" className="list">
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          container
          item
          component="li"
          // xs={12}
          //
          // direction="row"
          // justifyContent="center"
          // alignItems="center"
          // backgroundColor={"primary.main"}
        >
          <p>{name}</p>
          <a href={`tel:${number}`} className="link">
            {number}
          </a>
          <IconButton aria-label="edit contact">
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete contact"
            onClick={() => onDeleteContactBtnClick(id)}
          >
            <DeleteForeverIcon />
          </IconButton>
        </ContactsItem>
      ))}
    </Grid>
  );
}
