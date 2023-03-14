import styles from "../../styles/Components/Header.module.css";
import { Menu } from "./Menu";
import { TopLine } from "./TopLine";
import { useState, useEffect } from "react";

function Header() {
  const [displayTopLine, setDisplayTopLine] = useState(true);

  const changeTopLine = () => {
    if (window.pageYOffset > 0) {
      setDisplayTopLine(false);
    }
    if (window.pageYOffset === 0) {
      setDisplayTopLine(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeTopLine);

    return () => {
      window.removeEventListener("scroll", changeTopLine);
    };
  }, []);

  return (
    <header
      className={
        displayTopLine
          ? styles.header
          : `${styles.header} ${styles.headerNarrow}`
      }>
      <div className={styles.headerContainer}>
        <TopLine />
        <Menu displayTopLine={displayTopLine} />
      </div>
    </header>
  );
}

export default Header;
