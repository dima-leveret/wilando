import EmailJsForm from "../components/EmailJsForm";
import HeadComponent from "../components/HeadComponent"

function Contact () {
    return (
      <>
        <HeadComponent title="Wilando | Contact" />
        <h2>Contact</h2>

        <EmailJsForm />
      </>
    );
}

export default Contact;