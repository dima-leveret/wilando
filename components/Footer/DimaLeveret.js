import styles from "../../styles/Components/Footer.module.css";
import { Typography } from "../Typography";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

export const DimaLeveret = () => {
  return (
    <div className={styles.dimaContainer}>
      <Typography styleVariant="textPrimary">
        Created by Dima Zaichenko
      </Typography>
      <div className={styles.dimaSocialLinks}>
        <a href="https://www.linkedin.com/in/dima-zaichenko/" target="_blank">
          <FaLinkedin className={styles.dimaLinkedin} />
        </a>
        <a href="https://www.facebook.com/dima.zaychenko.9" target="_blank">
          <FaFacebook className={styles.dimaFacebook} />
        </a>
      </div>
    </div>
  );
};
