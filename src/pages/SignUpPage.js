import Footer from "components/Footer";
import Header from "components/Header";
import { SignUpForm } from "components/SignUpForm";

export default function SignUpPage() {
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
