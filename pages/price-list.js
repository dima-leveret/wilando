import HeadComponent from "../components/HeadComponent";
import PageTitle from "../components/PageTitle";
import styles from "../styles/pages/Price-list.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { MoreInfo } from "../components/MoreInfo";

function PriceList() {
  return (
    <>
      <HeadComponent title="Wilando | Price list" />
      <PageTitle title="Cennik" />
      <div className={styles.container}>
        <span>
          Cena każdego projektu wyceniana jest indywidualnie w zależności od
          wielu czynników takich jak rozmiar grafiki czy miejscowość itp.
        </span>
        <span>
          Szacunkowy koszt druku do 1m<sup>2</sup> wynosi 300 zł netto + VAT (8%
          dla osób prywatnych oraz 23% dla firm). Cena jest wyliczona dla
          powiatu poznańskiego. Dla tego dla wyceny prosimy o podanie
          miejscowości gdzie ma być wykonany druk.
        </span>
        <div className={styles.pricing}>
          <h4 className={styles.pricingTitle}>Dla wyceny potrzebujemy:</h4>
          <ul className={styles.procingList}>
            <li>
              {" "}
              <IoIosArrowForward className={styles.liIcon} /> Wybraną grafikę
              (gdy już masz)
            </li>
            <li>
              {" "}
              <IoIosArrowForward className={styles.liIcon} /> Zdjęcie ściany
              wraz z podłogą
            </li>
            <li>
              {" "}
              <IoIosArrowForward className={styles.liIcon} /> Wymiary ściany
              (szerokość i wysokość od podłogi do sufitu)
            </li>
            <li>
              {" "}
              <IoIosArrowForward className={styles.liIcon} /> Miejscowość
            </li>
            <li>
              {" "}
              <IoIosArrowForward className={styles.liIcon} /> Jakiej wielkości
              ma być druk
            </li>
          </ul>
        </div>
        <MoreInfo />
      </div>
    </>
  );
}

export default PriceList;
