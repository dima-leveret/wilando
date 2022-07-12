import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Components/Header.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import disableScroll from "disable-scroll";
import { useState } from "react";

export const Menu = ({ displayTopLine }) => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const showBugerMenu = () => {
    setBurgerMenu(!burgerMenu);

    disableScroll[burgerMenu ? "off" : "on"]();
  };

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
    disableScroll.off();
  };
  return (
    <div className={styles.menu}>
      <Link href="/">
        <a className={styles.logo}>
          <Image
            src="/logo-willando-small-size2.png"
            width={300}
            height={150}
            onClick={closeBurgerMenu}
          />
        </a>
      </Link>
      <div
        className={burgerMenu ? styles.navBarActive : styles.navBar}
        onClick={closeBurgerMenu}
      >
        <nav className={styles.nav}>
          <Link href="/">
            <a>Główna</a>
          </Link>
          <Link href="/galery">
            <a>Galeria</a>
          </Link>
          <Link href="/for-whom">
            <a>Dla kogo</a>
          </Link>
          <Link href="/price-list">
            <a>Cennik</a>
          </Link>
          <Link href="/about-us">
            <a>O nas</a>
          </Link>
          <Link href="/contact">
            <a>Kontakt</a>
          </Link>
        </nav>
      </div>

      {burgerMenu ? (
        <AiOutlineClose className={styles.burgerIcon} onClick={showBugerMenu} />
      ) : (
        <AiOutlineMenu className={styles.burgerIcon} onClick={showBugerMenu} />
      )}
    </div>
  );
};
