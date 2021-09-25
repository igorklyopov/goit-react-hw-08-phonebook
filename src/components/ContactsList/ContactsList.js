import { useSelector, useDispatch } from "react-redux";
import style from "../ContactsList/ContactsList.module.css";
import IconButton, {
  deleteContactBtnClassNames,
} from "../IconButton/IconButton";
import { ReactComponent as IconCross } from "images/cross.svg";
import addClassNames from "utils/addClassNames";
import {
  deleteContact,
  fetchContacts,
} from "redux/contacts/contactsOperations";
import { getFilteredContacts } from "redux/contacts/contactsSelectors";
import { useEffect } from "react";

const ContactsList = () => {
  const contactsListClassNames = addClassNames("list", style.contactsList);
  const contactNameClassNames = addClassNames("link", style.contactsNumber);

  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContactBtnClick = (id) => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={contactsListClassNames}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactsListItem}>
          <p className={style.contactsName}>{name}: </p>
          <a href={`tel:${number}`} className={contactNameClassNames}>
            {number}
          </a>
          <IconButton
            type="button"
            ariaLabel="Delete contact button"
            width="40"
            height="40"
            onClick={() => onDeleteContactBtnClick(id)}
            className={deleteContactBtnClassNames}
          >
            <IconCross width="15" height="15" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
