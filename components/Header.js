import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useState } from "react";
import * as GoIcons from "react-icons/go";

function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const showBugerMenu = () => setBurgerMenu(!burgerMenu);

  const closeBurgerMenu = () => setBurgerMenu(false);

  return (
    <header className={styles.header}>
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
      <div>
        {burgerMenu ? (
          <GoIcons.GoX className={styles.burgerIcon} onClick={showBugerMenu} />
        ) : (
          <GoIcons.GoThreeBars
            className={styles.burgerIcon}
            onClick={showBugerMenu}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
