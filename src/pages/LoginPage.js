import Footer from "components/Footer";
import Header from "components/Header";
import { LoginForm } from "../components/LoginForm";

function LoginPage() {
  return (
    <>
      <Header />
      <main>
        <h1>LoginPage</h1>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}

export { LoginPage };
