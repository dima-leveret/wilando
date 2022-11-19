import { Heading, Text } from "./Typography";
import styles from "../styles/Components/HowToMakeOrder.module.css";
import { ImLink } from "react-icons/im";

export const HowToMakeOrder = () => {
  return (
    <>
      <Heading markedFragment="Jak " heading="złożyć zamówienie?" />
      <ul className={styles.makeOrderList}>
        <li>
          <Text text="1. Wybierz miejsce druku" />
        </li>
        <li>
          <Text text="2. Zrób zdjęcie miejsca druku razem z podłogą" />
        </li>
        <li>
          <Text text="3. Wybierz grafikę druku. Obraz może być dowolny na Wasze życzenie. Możesz szukać grafiki na serwisach z grafiką:" />
          <ul className={styles.sitesList}>
            <li>
              <a
                className={styles.siteLink}
                href="https://unsplash.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Unsplash
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://pixabay.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Pixabay
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://gratisography.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Gratisography
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://www.shutterstock.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Shutterstock
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://www.freepik.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Freepik
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://www.istockphoto.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                iStockphoto
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://depositphotos.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Depositphotos
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://www.123rf.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                123rf
              </a>
            </li>
          </ul>
        </li>
        <li>
          <p className={styles.text}>
            4. Wyślij do nas na{" "}
            <a href="mailto: wilando.art@gmail.com" className={styles.mail}>
              wilando.art@gmail.com
            </a>{" "}
            wybraną grafikę, zdjęcje ściany, napisz wymiary ściany, wielkość
            druku oraz miejscowość
          </p>
        </li>
        <li>
          <Text text="5. Po otrzymaniu wiadomości nasi pracownicy skontaktują się z Tobą już z wyceną projektu" />
        </li>
      </ul>
    </>
  );
};
