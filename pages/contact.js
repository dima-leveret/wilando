import EmailJsForm from "../components/EmailJsForm";
import HeadComponent from "../components/HeadComponent";
import GoogleMapIframe from "../components/GoogleMapIframe";

function Contact () {
    return (
      <>
        <HeadComponent title="Wilando | Contact" />
        <h2>Contact</h2>

        <EmailJsForm />

        <GoogleMapIframe />
      </>
    );
}

export default Contact;