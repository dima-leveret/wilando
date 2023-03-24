import styles from "../../styles/Components/Header.module.css";
import { SocialLinks } from "../SocialLinks";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export const TopLine = () => {
  const { i18n } = useTranslation();
  const { locales } = useRouter();

  const handleClick = (l) => {
    i18n.changeLanguage(l);
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
        {locales.map((l) => (
          <button
            className={styles.lngBtn}
            onClick={() => handleClick(l)}
            key={l}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
};
