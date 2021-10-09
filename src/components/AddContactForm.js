import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Zoom } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import { getFilteredContacts } from "redux/contacts/contactsSelectors";
import { theme } from "common/theme";
import { StyledFormInput } from "./StyledFormInput";

export default function AddContactForm({
  onSubmit,
  currentContactId,
  isContactSaved,
  setIsContactSaved,
}) {
  const { handleSubmit, control, setValue } = useForm();

  const contacts = useSelector(getFilteredContacts);
  const getCurrentContactById = (contacts) => {
    return contacts.find((contact) => contact.id === currentContactId);
  };
  const currentContact = getCurrentContactById(contacts);

  const onAddContactInputChange = (e) => {
    setValue(e.target.name, e.target.value);
    setIsContactSaved(false);
  };

  const onSubmitContactData = (data) => {
    onSubmit(data);
    reset();
  };

  const reset = () => {
    setValue("name", "");
    setValue("number", "");
  };

  const inputNameErrMessage =
    "The name can only consist of letters, apostrophes, dashes and spaces, it must not start or end with a space. For example, Adrian, Jacob Mercer, Charles de Buz de Castelmore d'Artagnan, etc.";
  const inputNameValidationPattern =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$/;
  const inputNumberErrMessage =
    "The phone number must be at least 5 digits long and can contain spaces, hyphens, parentheses and can start with +, must not start or end with a space.";
  const inputNumberValidationPattern =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmitContactData)}
      sx={{ display: "flex", justifyContent: "flex-end", flexWrap: "wrap" }}
    >
      <Controller
        name="name"
        control={control}
        defaultValue={currentContact ? currentContact.name : ""}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <StyledFormInput
            autoFocus
            variant="outlined"
            margin="dense"
            fullWidth
            name="name"
            label="Name"
            value={value}
            onInput={onChange}
            onChange={onAddContactInputChange}
            error={!!error}
            helperText={error ? error.message || inputNameErrMessage : null}
          />
        )}
        rules={{
          pattern: inputNameValidationPattern,
          required: "Enter name",
        }}
      />
      <Controller
        name="number"
        control={control}
        defaultValue={currentContact ? currentContact.number : ""}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <StyledFormInput
            variant="outlined"
            margin="dense"
            fullWidth
            name="number"
            label="Number"
            value={value}
            onInput={onChange}
            onChange={onAddContactInputChange}
            error={!!error}
            helperText={error ? error.message || inputNumberErrMessage : null}
            type="tel"
          />
        )}
        rules={{
          pattern: inputNumberValidationPattern,
          required: "Enter number",
        }}
      />

      <Button
        type="submit"
        variant="outlined"
        aria-label="save"
        disabled={isContactSaved}
        sx={{
          "&:hover, &:focus": {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
          },
          marginTop: "5px",
          "&.Mui-disabled": {
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        {isContactSaved ? (
          <Zoom in={isContactSaved}>{<CheckIcon />}</Zoom>
        ) : (
          "Save"
        )}
      </Button>
    </Box>
  );
}
