import styles from "../../styles/Components/Header.module.css";
import { SocialLinks } from "../SocialLinks";
// import { ImPhone } from "react-icons/im";

export const TopLine = () => {
  return (
    <div className={styles.topLine}>
      {/* <span className={styles.phoneNrContainer}>
        <ImPhone className={styles.phoneIcon} />
        <a className={styles.phoneNr} href="tel:123456789">
          123 456 789
        </a>
      </span> */}
      <SocialLinks />
    </div>
  );
};
