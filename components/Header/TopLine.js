import styles from "../../styles/Components/Header.module.css";
import { SocialLinks } from "../SocialLinks";
import { ImPhone } from "react-icons/im";
import { useState, useEffect } from "react";

export const TopLine = () => {
  const [displayTopLine, setDisplayTopLine] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setDisplayTopLine(false);
      }
      if (window.pageYOffset === 0) {
        setDisplayTopLine(true);
      }
    });
  }, []);

  return (
    <div className={displayTopLine ? styles.topLine : styles.topLineHidden}>
      <span className={styles.phoneNrContainer}>
        <ImPhone className={styles.phoneIcon} />
        <a className={styles.phoneNr} href="tel:123456789">
          123 456 789
        </a>
      </span>
      <SocialLinks />
    </div>
  );
};
