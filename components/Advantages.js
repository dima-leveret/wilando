import { GiMountains } from "react-icons/gi";
import { CgPlayButtonO } from "react-icons/cg";
import { TbWall, TbFlower, TbClock2 } from "react-icons/tb";
import { GoEye } from "react-icons/go";
import { Typography } from "./Typography";
import styles from "../styles/Components/Advantages.module.css";

export const Advantages = () => {
  return (
    <>
      <Typography
        styleVariant="headingPrimary"
        heading
        markedFragment="Kluczowe"
        children="zalety takiego sposobu dekorowania:"
      />
      <div className={styles.advantagesConatiner}>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <GiMountains className={styles.advantageIcon} />
            <span>Jakość druku</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children="Jesteśmy w stanie drukować obrazy rozdzielczością 720x2880 dpi i 1440x2880 dpi. Dla tego wydruk wygląda niezwykle realistycznie i dokładnie"
          />
        </div>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <CgPlayButtonO className={styles.advantageIcon} />
            <span>Prędkość</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children="Szybkość druku osiąga 1 m2 na godzinę w zależności od złożoności obrazu"
          />
        </div>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <TbWall className={styles.advantageIcon} />
            <span>Typ podłoża</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children="Druk wykonuje się prosto na ścianę lub inną powierzchnię pionową bez konieczności wcześniejszego przygotowania podłoża. Typy podłoża: tynk, farba, cegła, drewno, plastik, kamień, beton, tapety"
          />
        </div>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <TbFlower className={styles.advantageIcon} />
            <span>Ekologiczne atramenty UV</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children="Używane tusze są ekologiczne, przyjazne dla ludzi, zwierzęta oraz środowiska. Wysychają błyskawicznie, nie pozostawiają smug ani zapachu"
          />
        </div>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <TbClock2 className={styles.advantageIcon} />
            <span>Trwałość druku</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children="Grafika jest drukowana atramentami UV i od razu utwardzana światłem UV. Co gwarantuję wysoką trwałość druku i odporność na warunki atmosferyczne"
          />
        </div>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <GoEye className={styles.advantageIcon} />
            <span>Pielęgnacja druku</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children="Atrament jest odporny na wilgoć. Nadruki można przecierać wilgotną ściereczką"
          />
        </div>
      </div>
    </>
  );
};
