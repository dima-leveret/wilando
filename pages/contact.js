import BasicInfo from "../components/BasicInfo";
import EmailJsForm from "../components/EmailJsForm";
import HeadComponent from "../components/HeadComponent";
import GoogleMapIframe from "../components/GoogleMapIframe";
import styles from "../styles/pages/Kontakt.module.css";
import { Typography } from "../components/Typography";
import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Contact() {
  const { t } = useTranslation("pageTitle");
  return (
    <Layout>
      <HeadComponent title="Wilando | Contact" />
      <Typography styleVariant="pageTitle" children={t("page-title-contact")} />
      <BasicInfo />
      <div className={styles.mapContact}>
        <div className={styles.mapContactContainer}>
          <GoogleMapIframe />
          <EmailJsForm />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["pageTitle"])),
    },
  };
}
