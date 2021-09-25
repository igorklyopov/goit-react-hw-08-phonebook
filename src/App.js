import Container from "./components/Container";
import ContactsList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import Section from "./components/Section";

function App() {
  return (
    <Section>
      <Container>
        <h1 className="mainTitle">Phonebook</h1>
        <ContactForm />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactsList />
      </Container>
    </Section>
  );
}

export default App;
