import BasicInfo from "../components/BasicInfo";
import EmailJsForm from "../components/EmailJsForm";
import HeadComponent from "../components/HeadComponent";
import GoogleMapIframe from "../components/GoogleMapIframe";
import styles from "../styles/pages/Kontakt.module.css";
import PageTitle from "../components/PageTitle";

function Contact() {
  return (
    <>
      <HeadComponent title="Wilando | Contact" />
      <PageTitle title="Kontakt" />
      <BasicInfo />
      <div className={styles.mapContact}>
        <div className={styles.mapContactContainer}>
          <GoogleMapIframe />
          <EmailJsForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
