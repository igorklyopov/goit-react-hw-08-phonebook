import Footer from "components/Footer";
import Header from "components/Header";
import { SignUpForm } from "components/SignUpForm";

function SignUpPage() {
  return (
    <>
      <Header />
      <main>
        <h1>SignUpsPage</h1>
        <SignUpForm />
      </main>
      <Footer />
    </>
  );
}

export { SignUpPage };
