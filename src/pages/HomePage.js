import Footer from "components/Footer";
import Header from "components/Header";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <p style={{ marginTop: "200px" }}>
          Welcome to the Phonebook👋 Now you won't forget your contacts! Please
          register or login to access your contact list!
        </p>
      </main>
      <Footer />
    </>
  );
}

export { HomePage };
