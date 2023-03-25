import styles from "../../styles/Components/Header.module.css";
import { SocialLinks } from "../SocialLinks";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

export const TopLine = () => {
  const [activeLng, setActiveLng] = useState();

  const { i18n } = useTranslation();

  const lngs = {
    pl: { lngName: "pl" },
    ua: { lngName: "ua" },
  };

  const handleClick = (l) => {
    i18n.changeLanguage(l);
    setActiveLng(localStorage.getItem("i18nextLng"));
  };

  useEffect(() => {
    setActiveLng(localStorage.getItem("i18nextLng"));
  }, []);

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
        {Object.keys(lngs).map((lng) => (
          <button
            className={
              activeLng === lng ? styles.lngBtnSelected : styles.lngBtn
            }
            key={lng}
            onClick={() => handleClick(lng)}
            disabled={activeLng === lng}
          >
            {lngs[lng].lngName}
          </button>
        ))}
      </div>
    </div>
  );
};
