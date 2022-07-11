import styles from "../styles/Components/Header.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a href="https://www.facebook.com/Wilando.print" target="blank">
        <FaFacebookF className={styles.facebookIcon} />
      </a>
      <a href="#">
        <FaInstagram className={styles.instagramIcon} />
      </a>
    </div>
  );
};
