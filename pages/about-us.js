import HeadComponent from "../components/HeadComponent";
import PageTitle from "../components/PageTitle";
import style from "../styles/pages/About.module.css";
import { Heading, Text } from "../components/Typography";

function AboutUs() {
  return (
    <>
      <HeadComponent title="Wilando | About us" />
      <PageTitle title="O nas" />

      <div className={style.container}>
        <Heading
          markedFragment="Druk "
          heading="ścienny to nowa technologia która pozwala drukować dokładne i
          wysokiej jakości obrazy na prawie każdej pionowej powierzchni wewnątrz
          lub zewnątrz pomieszczeń."
        />
        <Text
          text="Nasza drukarka pozwala drukować obrazy do 2,5 metry wysokości bez bez
          limitu szerokości. Wyjątkowość drukarki polega również na drukowaniu
          ekologicznymi, przyjaznymi dla środowiska i szybkoschnąncymi
          atramentami UV. Dzięki temu tusz wysycha błyskawicznie, nie
          pozostawiając smug ani zapachu."
        />
      </div>
    </>
  );
}

export default AboutUs;
