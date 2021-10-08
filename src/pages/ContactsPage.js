import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Box } from "@mui/material";

import { getContacts } from "redux/contacts/contactsSelectors";
import ContactsList from "components/ContactsList";
import ContactsBar from "components/ContactsBar";
import AddContactModal from "components/AddContactModal";
import NoContactsView from "components/NoContactsView";

export default function ContactsPage() {
  const [isOpenAddContactModal, setIsOpenAddContactModal] = useState(false);
  const [currentContactId, setCurrentContactId] = useState(null);
  const contacts = useSelector(getContacts);

  return (
    <Box component="section" sx={{ flexGrow: 1, paddingTop: "70px" }}>
      <Container>
        <h1 className="visuallyHidden">Contacts</h1>
        {contacts.length > 0 ? (
          <ContactsList
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
