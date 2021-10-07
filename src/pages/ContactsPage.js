import { useState } from "react";
import { Container, Box } from "@mui/material";

import ContactsList from "components/ContactsList";
import ContactsBar from "components/ContactsBar";
import AddContactModal from "components/AddContactModal";

import Form from "components/AddContactForm";

export default function ContactsPage() {
  const [isOpenAddContactModal, setIsOpenAddContactModal] = useState(false);
  // const [addContactInitialValue, setAddContactInitialValue] = useState("");
  const [currentContactId, setCurrentContactId] = useState(null);

  return (
    <Box component="section" sx={{ flexGrow: 1 }}>
      <Container>
        <h1 className="visuallyHidden">Contacts</h1>
        <ContactsList
          openAddContactModal={setIsOpenAddContactModal}
          setCurrentContactId={setCurrentContactId}
        />
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

{
  /* <BasicGrid />
      <Section>
        <Container>
          <h1 className="mainTitle">Phonebook</h1>
          <ContactForm />
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactsList />
        </Container>
      </Section> */
}
