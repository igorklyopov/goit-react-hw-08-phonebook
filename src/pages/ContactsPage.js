import Container from "../components/Container";
import ContactsList from "../components/ContactsList";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import Section from "../components/Section";

import Footer from "components/Footer";
import Header from "components/Header";
import BasicGrid from "../components/ListC";
import ContactsAppBar from "components/ContactsAppBar";

export default function ContactsPage() {
  return (
    <>
      <h1>ContactsPage</h1>
      <BasicGrid />
      <Section>
        <Container>
          <h1 className="mainTitle">Phonebook</h1>
          <ContactForm />
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactsList />
        </Container>
      </Section>
      <ContactsAppBar />
    </>
  );
}
