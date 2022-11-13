import HeadComponent from "../components/HeadComponent";
import PageTitle from "../components/PageTitle";
import styles from "../styles/pages/For-whom.module.css";
import { Heading, Text } from "../components/Typography";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";

function ForWhom() {
  return (
    <>
      <HeadComponent title="Wilando | Fro whom" />
      <PageTitle title="Dla kogo" />

      <Heading
        markedFragment="Stwórz "
        heading="niezapomnianą atmosferę która zaskoczy twoich gości!"
      />
      <Text text="Pionowy druk jest nowoczesną możliwością dekorowania ścian i innych powierzchni za pomocą pionowej drukarki." />

      <Heading markedFragment="Obowiązujące " heading="branże:" />
      <ul className={styles.industriesList}>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Text text="Dekoracja domowa" />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Text text="Przemysł reklamowy" />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Text text="Przemysł kulturalny i edukacyjny" />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Text text="Dekoracja hoteli i restauracji" />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Text text="Sztuka ścienna, muzea itp." />
        </li>
      </ul>

      <div className={styles.advantagesConatiner}>
        <div className={styles.advantage}>
          <BsHouseDoor className={styles.advantageIcon} />
          <Text text="Dekoracja domu nigdy nie była tak prosta! Uzupełnij puste ściany portretem rodzinnym, znanym na świecie obrazem lub inną grafiką na swój gust!" />
        </div>
        <div className={styles.advantage}>
          <FaRegBuilding className={styles.advantageIcon} />
          <Text text="Wyróżnij swoje biuro, restauracje, kawiarnie niezapomnianą grafiką która przyciągnie uwagę klientów!" />
        </div>
      </div>

      <Heading
        markedFragment="Wszystko "
        heading="zrobisz bez żadnych przygotowań podłoża!"
      />
    </>
  );
}

export default ForWhom;
