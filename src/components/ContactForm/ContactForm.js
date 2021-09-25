import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/contactsOperations";
import { getContacts } from "redux/contacts/contactsSelectors";
import Button from "../Button";
import style from "../ContactForm/ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "number") setNumber(e.target.value);
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
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={style.contactForm} onSubmit={onFormSubmit}>
      <label className={style.inputNameLabel}>
        <span className={style.inputLabelText}>Name</span>
        <input
          className={style.inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я ]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов, не должно начинаться или оканчиваться пробелом. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={onInputChange}
        />
      </label>
      <label className={style.inputTelNumberLabel}>
        <span className={style.inputLabelText}>Number</span>
        <input
          className={style.inputTelNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки, и может начинаться с +, не должен начинаться или оканчиваться пробелом"
          required
          value={number}
          onChange={onInputChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
}

export default ContactForm;
