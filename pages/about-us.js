import style from "../styles/About.module.css"
import HeadComponent from "../components/HeadComponent"

function AboutUs () {


    return (
      <>
        <HeadComponent title="Wilando | About us" />

        <div className={style.container}>
          <h2>O nas</h2>
          <h4>
            Druk ścienny to nowa technologia która pozwala drukować dokładne i
            wysokiej jakości obrazy na prawie każdej pionowej powierzchni
            wewnątrz lub zewnątrz pomieszczeń.
          </h4>
          <p>
            Nasza drukarka pozwala drukować obrazy do 2,5 metry wysokości bez
            bez limitu szerokości. Wyjątkowość drukarki polega również na
            drukowaniu ekologicznymi, przyjaznymi dla środowiska i
            szybkoschnąncymi atramentami UV. Dzięki temu tusz wysycha
            błyskawicznie, nie pozostawiając smug ani zapachu.
          </p>
        </div>
      </>
    );
}

export default AboutUs;