import HeadComponent from "../components/HeadComponent";
import PageTitle from "../components/PageTitle";
import Slider from "../components/Slider/Slider";
import styles from "../styles/pages/Home.module.css";
import { Heading, Text } from "../components/Typography";
import { GiMountains } from "react-icons/gi";
import { CgPlayButtonO } from "react-icons/cg";
import { TbWall, TbFlower, TbClock2 } from "react-icons/tb";
import { GoEye } from "react-icons/go";

export default function Home() {
  return (
    <>
      <HeadComponent title="Wilando" />

      <PageTitle title="Główna" />

      <Slider />

      <div className={styles.homeText}>
        <div className={styles.homeTextContainer}>
          <Heading
            markedFragment="Witamy"
            heading="świece unikalnych
            technologij dekoru!"
          />
          <Text
            text="Chcesz dodać w swoje życie barw czy inspiracji? Wyróżnić swoje mieszkanie lub miejsce pracy? Zapraszamy do współpracy z naszym
            zespołem Wilando. Prezentujemy Wam nową możliwość dekorowania ścian i innych powierzchni za pomocą pionowej drukarki. Teraz logo Waszej
            firmy, zdjęcie rodzinne, pejzaż lub znany na całym świece obraz może ozdobić ściany Waszego domu, biura, restauracji czy innego pomieszczenia. Jedynym ograniczeniem jest twoja własna wyobrażnia."
          />
          <Heading markedFragment="W jaki" heading="sposób to działa?" />
          <Text text="Dla druku używamy pionową drukarkę z możliwością drukowania do 260 cm wysokości, przy czym szerokość wydruku nie jest ograniczona." />
          <Heading
            markedFragment="Kluczowe"
            heading="zalety takiego sposobu dekorowania:"
          />
          <div className={styles.advantagesConatiner}>
            <div className={styles.advantage}>
              <GiMountains className={styles.advantageIcon} />
              <Text text="Jakość druku Jesteśmy w stanie drukować obrazy rozdzielczością 720x2880 dpi i 1440x2880 dpi. Dla tego wydruk wygląda niezwykle realistycznie i dokładnie" />
            </div>
            <div className={styles.advantage}>
              <CgPlayButtonO className={styles.advantageIcon} />
              <Text text="Prędkość Szybkość druku osiąga 2-3 m2 na godzinę w zależności od złożoności obrazu" />
            </div>
            <div className={styles.advantage}>
              <TbWall className={styles.advantageIcon} />
              <Text text="Typ podłoża Druk wykonuje się prosto na ścianę lub inną powierzchnię pionową bez konieczności wcześniejszego przygotowania podłoża. Typy podłoża: tynk, farba, cegła, drewno, plastik, kamień, beton, tapety" />
            </div>
            <div className={styles.advantage}>
              <TbFlower className={styles.advantageIcon} />
              <Text text="Ekologiczne atramenty UV Używane tusze są ekologiczne, przyjazne dla ludzi, zwierzęta oraz środowiska. Wysychają błyskawicznie, nie pozostawiają smug ani zapachu" />
            </div>
            <div className={styles.advantage}>
              <TbClock2 className={styles.advantageIcon} />
              <Text text="Trwałość druku Grafika drukowana jest drukowana atramentami UV i od razu utwardzana światłem UV. Co gwarantuję wysoką trwałość druku i odporność na warunki atmosferyczne" />
            </div>
            <div className={styles.advantage}>
              <GoEye className={styles.advantageIcon} />
              <Text text="Pielęgnacja druku Atrament jest odporny na wilgoć. Nadruki można przecierać wilgotną ściereczką" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
