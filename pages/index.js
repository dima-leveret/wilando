import HeadComponent from "../components/HeadComponent";
import PageTitle from "../components/PageTitle";
import Slider from "../components/Slider/Slider";
import styles from "../styles/pages/Home.module.css";
import { Heading, Text } from "../components/Typography";
import { Advantages } from "../components/Advantages";

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
          <Advantages />
        </div>
      </div>
    </>
  );
}
