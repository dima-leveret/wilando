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
            Druk ścienny to nowa technologia która pozwala drukować dokładne i
            wysokiej jakości obrazy na prawie każdej pionowej powierzchni
            wewnątrz lub zewnątrz pomieszczeń. Nasza drukarka pozwala drukować
            obrazy do 2,5 metry wysokości bez limitu szerokości. Wyjątkowość
            drukarki polega również na drukowaniu ekologicznymi, przyjaznymi dla
            środowiska i szybkoschnąncymi atramentami UV. Dzięki temu tusz
            wysycha błyskawicznie, nie pozostawiając smug ani zapachu.
          </p>
          <SocialLinks />
        </div>

        <div className={styles.contactUs}>
          <p className={styles.title}>kontakt</p>

          <div className={styles.contactUsItem}>
            <MdLocationOn className={styles.contactUsIcon} />
            <div className={styles.contactUsText}>
              <span>Adres:</span>
              <p>Kopanina 54/56, 60-105, Poznań</p>
            </div>
          </div>

          <div className={styles.contactUsItem}>
            <MdPhone className={styles.contactUsIcon} />
            <div className={styles.contactUsText}>
              <span>Telefon:</span>
              <a href="tel:+48 123 123 123" className={styles.phoneNr}>
                +48 123 123 123
              </a>
            </div>
          </div>

          <div className={styles.contactUsItem}>
            <MdEmail className={styles.contactUsIcon} />
            <div className={styles.contactUsText}>
              <span>Mail:</span>
              <a href="mailto:wilando@gmail.com">wilando@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <DimaLeveret />
    </footer>
  );
}

export default Footer;
