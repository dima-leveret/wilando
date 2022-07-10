import styles from "../../styles/Components/Header.module.css";
import { Menu } from "./Menu";
import { TopLine } from "./TopLine";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <TopLine />
        <Menu />
      </div>
    </header>
  );
}

export default Header;
