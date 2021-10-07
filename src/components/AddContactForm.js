import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Box, Button } from "@mui/material";

import { getFilteredContacts } from "redux/contacts/contactsSelectors";
import { theme } from "common/theme";
import { StyledFormInput } from "./StyledFormInput";

export default function AddContactForm({ onSubmit, currentContactId }) {
  const { handleSubmit, control, setValue } = useForm();

  const contacts = useSelector(getFilteredContacts);
  const getCurrentContactById = (contacts) => {
    return contacts.find((contact) => contact.id === currentContactId);
  };
  const currentContact = getCurrentContactById(contacts);

  const onAddContactInputChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const onSubmitContactData = (data) => {
    onSubmit(data);
    // reset();
  };

  const reset = () => {
    setValue("name", "");
    setValue("number", "");
  };

  const inputNameErrMessage =
    "Имя может состоять только из букв, апострофа, тире и пробелов, не должно начинаться или оканчиваться пробелом. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.";
  const inputNameValidationPattern =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$/;
  const inputNumberErrMessage =
    "Номер телефона должен состоять из 5 больше цифр и может содержать пробелы, тире, круглые скобки, и может начинаться с +, не должен начинаться или оканчиваться пробелом";
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
        sx={{
          "&:hover, &:focus": {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
          },
          marginTop: "5px",
        }}
      >
        Save
      </Button>
    </Box>
  );
}
