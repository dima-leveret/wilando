import BasicInfo from "../components/BasicInfo";
import EmailJsForm from "../components/EmailJsForm";
import HeadComponent from "../components/HeadComponent";
import GoogleMapIframe from "../components/GoogleMapIframe";
import styles from "../styles/pages/Kontakt.module.css";

function Contact() {
  return (
    <>
      <HeadComponent title="Wilando | Contact" />
      <BasicInfo />
      <div className={styles.mapContactContainer}>
        <GoogleMapIframe />
        <EmailJsForm />
      </div>
    </>
  );
}

export default Contact;
