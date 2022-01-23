import React from "react";
import Link from "next/link";


function Header() {

    return (
      <header>
        <Link href="/">
          <h1 className="logo">Wilando</h1>
        </Link>
        <nav>
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
      </header>
    );

}

export default Header;