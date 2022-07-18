import { DimaLeveret } from "./DimaLeveret";
import { SocialLinks } from "../SocialLinks";
import styles from "../../styles/Components/Footer.module.css";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.about}>
          <p className={styles.title}>o nas</p>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
            amet turpis venenatis nulla dignissim scelerisque. Ut volutpat
            maximus ligula.
          </p>
          <SocialLinks />
        </div>

        <div className={styles.contactUs}>
          <p className={styles.title}>kontakt</p>

          <div className={styles.contactUsItem}>
            <MdLocationOn className={styles.contactUsIcon} />
            <div className={styles.contsctUsText}>
              <span>Adres:</span>
              <p>Kopanina 54/56, 60-105, Poznań</p>
            </div>
          </div>

          <div className={styles.contactUsItem}>
            <MdPhone className={styles.contactUsIcon} />
            <div className={styles.contsctUsText}>
              <span>Telefon:</span>
              <p>+48 123 123 123</p>
            </div>
          </div>

          <div className={styles.contactUsItem}>
            <MdEmail className={styles.contactUsIcon} />
            <div className={styles.contsctUsText}>
              <span>Mail:</span>
              <p>wilando@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <DimaLeveret />
    </footer>
  );
}

export default Footer;
