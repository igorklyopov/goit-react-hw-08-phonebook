import { useState } from "react";
import { Container, Box } from "@mui/material";

import ContactsList from "components/ContactsList";
import ContactsBar from "components/ContactsBar";
import AddContactModal from "components/AddContactModal";

export default function ContactsPage() {
  const [isOpenAddContactModal, setIsOpenAddContactModal] = useState(false);

  return (
    <Box component="section" sx={{ flexGrow: 1 }}>
      <Container>
        <h1 className="visuallyHidden">Contacts</h1>
        <ContactsList />
        <ContactsBar openAddContactModal={setIsOpenAddContactModal} />
        <AddContactModal
          isOpen={isOpenAddContactModal}
          onClose={setIsOpenAddContactModal}
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
