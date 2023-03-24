import styles from "../../styles/Components/Header.module.css";
import { SocialLinks } from "../SocialLinks";
import { useTranslation } from "react-i18next";

export const TopLine = () => {
  const { i18n } = useTranslation();

  const handleClick = (l) => {
    i18n.changeLanguage(l);
    console.log(l);
  };

  return (
    <div className={styles.topLine}>
      {/* <span className={styles.phoneNrContainer}>
        <ImPhone className={styles.phoneIcon} />
        <a className={styles.phoneNr} href="tel:123456789">
          123 456 789
        </a>
      </span> */}
      <SocialLinks />

      <div className={styles.lngBtnContainer}>
        <button className={styles.lngBtn} onClick={() => handleClick("pl")}>
          pl
        </button>
        <button className={styles.lngBtn} onClick={() => handleClick("ua")}>
          ua
        </button>
      </div>
    </div>
  );
};
