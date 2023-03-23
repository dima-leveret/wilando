import styles from "../../styles/Components/Header.module.css";
import { SocialLinks } from "../SocialLinks";
import { useRouter } from "next/router";

export const TopLine = () => {
  const { locales, locale, push } = useRouter();

  const handleClick = (l) => {
    push("/", undefined, { locale: l });
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
