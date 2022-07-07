import HeadComponent from "../components/HeadComponent";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <>
      <HeadComponent title="Wilando" />

      <Slider />

      <main>
        <h1>Witamy w świece unikalnych technologij dekoru!</h1>
        <p>
          Chcesz dodać w swoje życie barw czy inspiracji? Wyróżnić swoje
          mieszkanie lub miejsce pracy? Zapraszamy do współpracy z naszym
          zespołem Wilando. Prezentujemy Wam nową możliwość dekorowania ścian i
          innych powierzchni za pomocą pionowej drukarki. Teraz logo Waszej
          firmy, zdjęcie rodzinne, pejzaż lub znany na całym świece obraz może
          ozdobić ściany Waszego domu, biura, restauracji czy innego
          pomieszczenia. Jedynym ograniczeniem jest twoja własna wyobrażnia.
        </p>
      </main>
    </>
  );
}
