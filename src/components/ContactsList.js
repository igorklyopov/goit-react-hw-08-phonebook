import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { Grid, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { theme } from "common/theme";
import { deleteContact } from "redux/contacts/contactsOperations";

const ContactsItem = styled(Grid)(({ theme }) => ({
  ...theme.typography.body2,
  direction: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "5px",
  marginBottom: theme.spacing(1),
  boxShadow: theme.shadows[1],

  transitionProperty: "transform",
  transitionDuration: "300ms",
  transitionTimingFunction: "ease-out",
  "&:hover, &:focus": {
    boxShadow: theme.shadows[3],
    transform: "scale(1.02)",
  },
}));

const ContactsWrap = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  flexGrow: 1,
  flexDirection: "row",
  alignItems: "center",
});

export default function ContactsList({
  contacts,
  openAddContactModal,
  setCurrentContactId,
}) {
  const dispatch = useDispatch();

  const onDeleteContactBtnClick = (id) => dispatch(deleteContact(id));
  const onEditContactBtnClick = (id) => {
    openAddContactModal(true);
    setCurrentContactId(id);
  };

  return (
    <Grid
      container
      component="ul"
      className="list"
      sx={{ maxWidth: "600px", ml: "auto", mr: "auto" }}
    >
      {contacts?.map(({ id, name, number }) => (
        <ContactsItem key={id} container item component="li">
          <ContactsWrap sx={{ justifyContent: "space-between" }}>
            <ContactsWrap sx={{ justifyContent: "space-evenly" }}>
              <Typography component="span" sx={{ mr: "1%" }}>
                {name}
              </Typography>
              <Typography
                component="a"
                sx={{
                  mr: "1%",
                  "&:hover, &:focus": {
                    color: theme.palette.background.default,
                  },
                }}
                href={`tel:${number}`}
                className="link"
              >
                {number}
              </Typography>
            </ContactsWrap>
            <ContactsWrap sx={{ justifyContent: "space-evenly" }}>
              <IconButton
                aria-label="edit contact"
                onClick={() => onEditContactBtnClick(id)}
                sx={{
                  mr: "1%",
                  "&:hover, &:focus": {
                    color: theme.palette.background.default,
                  },
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete contact"
                onClick={() => onDeleteContactBtnClick(id)}
                sx={{
                  mr: "1%",
                  "&:hover, &:focus": {
                    color: theme.palette.background.default,
                  },
                }}
              >
                <DeleteForeverIcon />
              </IconButton>
            </ContactsWrap>
          </ContactsWrap>
        </ContactsItem>
      ))}
    </Grid>
  );
}
