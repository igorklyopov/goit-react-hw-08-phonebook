import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Box } from "@mui/material";

import ContactsList from "components/ContactsList";
import ContactsBar from "components/ContactsBar";
import AddContactModal from "components/AddContactModal";
import { getContacts } from "redux/contacts/contactsOperations";
import NoContactsView from "components/NoContactsView";
import { getFilteredContacts } from "redux/contacts/contactsSelectors";

export default function ContactsPage() {
  const [isOpenAddContactModal, setIsOpenAddContactModal] = useState(false);
  const [currentContactId, setCurrentContactId] = useState(null);
  const contacts = useSelector(getFilteredContacts);
  const contactsAll = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Box component="section" sx={{ flexGrow: 1, paddingTop: "80px" }}>
      <Container>
        <h1 className="visuallyHidden">Contacts</h1>
        {contactsAll?.length > 0 ? (
          <ContactsList
            contacts={contacts}
            openAddContactModal={setIsOpenAddContactModal}
            setCurrentContactId={setCurrentContactId}
          />
        ) : (
          <NoContactsView />
        )}
        <ContactsBar openAddContactModal={setIsOpenAddContactModal} />
        <AddContactModal
          isOpen={isOpenAddContactModal}
          onClose={setIsOpenAddContactModal}
          currentContactId={currentContactId}
          setCurrentContactId={setCurrentContactId}
        />
      </Container>
    </Box>
  );
}
