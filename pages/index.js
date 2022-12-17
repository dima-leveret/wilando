import HeadComponent from "../components/HeadComponent";
import Slider from "../components/Slider";
import styles from "../styles/pages/Home.module.css";
import { Advantages } from "../components/Advantages";
import { HowToMakeOrder } from "../components/HowToMakeOrder";
import Link from "next/link";
import { MoreInfo } from "../components/MoreInfo";
import { Typography } from "../components/Typography";

export default function Home() {
  return (
    <>
      <HeadComponent title="Wilando" />

      <Typography styleVariant="pageTitle" children="Główna" />

      <Slider />

      <div className={styles.home}>
        <div className={styles.homeContainer}>
          <Typography
            styleVariant="headingPrimary"
            heading
            markedFragment="Witamy"
            children="w świece unikalnych
            technologij dekoru!"
          />
          <Typography
            styleVariant="textPrimary"
            children="Chcesz dodać w swoje życie barw czy inspiracji? Wyróżnić swoje mieszkanie lub miejsce pracy? Zapraszamy do współpracy z naszym
            zespołem Wilando. Prezentujemy Wam nową możliwość dekorowania ścian i innych powierzchni za pomocą pionowej drukarki. Teraz logo Waszej
            firmy, zdjęcie rodzinne, pejzaż lub znany na całym świece obraz może ozdobić ściany Waszego domu, biura, restauracji czy innego pomieszczenia. Jedynym ograniczeniem jest twoja własna wyobrażnia."
          />
          <Typography
            heading
            markedFragment="W jaki"
            styleVariant="headingPrimary"
            children="sposób to działa?"
          />
          <Typography
            styleVariant="textPrimary"
            children="Dla druku używamy pionową drukarkę z możliwością drukowania do 190 cm wysokości, przy czym szerokość wydruku nie jest ograniczona."
          />

          <Advantages />
          <HowToMakeOrder />

          <Typography
            heading
            styleVariant="headingPrimary"
            markedFragment="Masz "
            children="pytania?"
          />
          <Typography styleVariant="textPrimary">
            Gdy jeszcze masz pytania sprawdź{" "}
            <Link href="/frequently-asked-questions">
              <a className={styles.linkToFAQ}>FAQ</a>
            </Link>
            .
          </Typography>
        </div>
      </div>
      <MoreInfo />
    </>
  );
}
