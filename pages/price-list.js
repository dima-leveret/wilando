import HeadComponent from "../components/HeadComponent";
import styles from "../styles/pages/Price-list.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { MoreInfo } from "../components/MoreInfo";
import { Typography } from "../components/Typography";

function PriceList() {
  return (
    <>
      <HeadComponent title="Wilando | Price list" />
      <Typography styleVariant="pageTitle" children="Cennik" />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Typography
            styleVariant="textPrimary"
            children="Cena każdego projektu wyceniana jest indywidualnie w zależności od
          wielu czynników takich jak rozmiar grafiki czy miejscowość itp."
          />
          <Typography
            styleVariant="textPrimary"
            children="Szacunkowy koszt druku do 1m2 wynosi 350 zł netto + VAT. Cena jest wyliczona dla
          powiatu poznańskiego. Dla tego dla wyceny prosimy o podanie
          miejscowości gdzie ma być wykonany druk."
          />
        </div>

        <div className={styles.pricing}>
          <Typography
            heading
            styleVariant="headingPrimary"
            markedFragment="Dla wyceny"
            children="potrzebujemy:"
          />
          <ul className={styles.procingList}>
            <li>
              <IoIosArrowForward className={styles.liIcon} />
              <Typography
                styleVariant="textPrimary"
                children="Wybraną grafikę (gdy już masz)"
              />
            </li>
            <li>
              <IoIosArrowForward className={styles.liIcon} />
              <Typography
                styleVariant="textPrimary"
                children=" Zdjęcie ściany wraz z podłogą"
              />
            </li>
            <li>
              <IoIosArrowForward className={styles.liIcon} />
              <Typography
                styleVariant="textPrimary"
                children="Wymiary ściany (szerokość i wysokość od podłogi do sufitu)"
              />
            </li>
            <li>
              <IoIosArrowForward className={styles.liIcon} />
              <Typography styleVariant="textPrimary" children="Miejscowość" />
            </li>
            <li>
              <IoIosArrowForward className={styles.liIcon} />
              <Typography
                styleVariant="textPrimary"
                children="Jakiej wielkości ma być druk"
              />
            </li>
          </ul>
        </div>
      </div>
      <MoreInfo />
    </>
  );
}

export default PriceList;
