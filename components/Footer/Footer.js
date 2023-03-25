import { DimaLeveret } from "./DimaLeveret";
import { SocialLinks } from "../SocialLinks";
import styles from "../../styles/Components/Footer.module.css";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("translation");
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.about}>
          <p className={styles.title}>{t("footer-about-us")}</p>
          <p className={styles.aboutText}>{t("footer-about-us-text")}</p>
          <SocialLinks />
        </div>

        <div className={styles.contactUs}>
          <p className={styles.title}>{t("footer-contact")}</p>

          <div className={styles.contactUsItem}>
            <MdLocationOn className={styles.contactUsIcon} />
            <div className={styles.contactUsText}>
              <span>{t("contact-addres")}:</span>
              <p>Kopanina 54/56, 60-105, Poznań</p>
            </div>
          </div>

          {/* <div className={styles.contactUsItem}>
            <MdPhone className={styles.contactUsIcon} />
            <div className={styles.contactUsText}>
              <span>Telefon:</span>
              <a href="tel:+48 123 123 123" className={styles.phoneNr}>
                +48 123 123 123
              </a>
            </div>
          </div> */}

          <div className={styles.contactUsItem}>
            <MdEmail className={styles.contactUsIcon} />
            <div className={styles.contactUsText}>
              <span>{t("contact-email")}:</span>
              <a href="mailto:wilando.art@gmail.com">wilando.art@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <DimaLeveret />
    </footer>
  );
}

export default Footer;
