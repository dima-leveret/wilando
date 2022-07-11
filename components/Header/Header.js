import styles from "../../styles/Components/Header.module.css";
import { Menu } from "./Menu";
import { TopLine } from "./TopLine";
import { useState, useEffect } from "react";

function Header() {
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
    <header
      className={
        displayTopLine
          ? styles.header
          : `${styles.header} ${styles.headerOpacity}`
      }
    >
      <div className={styles.headerContainer}>
        <TopLine displayTopLine={displayTopLine} />
        <Menu />
      </div>
    </header>
  );
}

export default Header;
