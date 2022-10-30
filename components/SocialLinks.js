import styles from "../styles/Components/SocialLinks.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a href="https://www.facebook.com/Wilando.print" target="_blank">
        <FaFacebookF className={styles.facebookIcon} />
      </a>
      <a href="https://www.instagram.com/wilando.wallprint/" target="_blank">
        <FaInstagram className={styles.instagramIcon} />
      </a>
    </div>
  );
};
