import Link from "next/link";
import styles from "../../styles/Components/Header.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import disableScroll from "disable-scroll";
import { useState } from "react";
import { LogoIcon } from "../../assets/Icons";
import { useTranslation } from "next-i18next";

export const Menu = ({ displayTopLine }) => {
  const { t } = useTranslation("pageTitle");

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
        <a
          onClick={closeBurgerMenu}
          className={displayTopLine ? styles.logo : styles.logoSmall}
        >
          <LogoIcon />
        </a>
      </Link>
      <div
        className={burgerMenu ? styles.navBarActive : styles.navBar}
        onClick={closeBurgerMenu}
      >
        <nav className={styles.nav}>
          <Link href="/">
            <a>{t("page-title-index")}</a>
          </Link>
          <Link href="/gallery">
            <a>{t("page-title-gallery")}</a>
          </Link>
          <Link href="/for-whom">
            <a>{t("page-title-for-whom")}</a>
          </Link>
          <Link href="/frequently-asked-questions">
            <a>{t("page-title-faq")}</a>
          </Link>
          <Link href="/price-list">
            <a>{t("page-title-price-list")}</a>
          </Link>
          <Link href="/contact">
            <a>{t("page-title-contact")}</a>
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
