import HeadComponent from "../components/HeadComponent";
import Layout from "../components/Layout";
import styles from "../styles/pages/For-whom.module.css";
import { Typography } from "../components/Typography";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function ForWhom() {
  const { t } = useTranslation("pageTitle");

  return (
    <Layout>
      <HeadComponent title="Wilando | Fro whom" />
      <Typography
        styleVariant="pageTitle"
        children={t("page-title-for-whom")}
      />

      <Typography
        heading
        styleVariant="headingPrimary"
        markedFragment="Stwórz "
        children="niezapomnianą atmosferę która zaskoczy twoich gości!"
      />
      <Typography
        styleVariant="textPrimary"
        children="Pionowy druk jest nowoczesną możliwością dekorowania ścian i innych powierzchni za pomocą pionowej drukarki."
      />

      <Typography
        styleVariant="headingPrimary"
        heading
        markedFragment="Obowiązujące "
        children="branże:"
      />
      <ul className={styles.industriesList}>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Typography styleVariant="textPrimary" children="Dekoracja domowa" />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Typography
            styleVariant="textPrimary"
            children="Przemysł reklamowy"
          />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Typography
            styleVariant="textPrimary"
            children="Przemysł kulturalny i edukacyjny"
          />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Typography
            styleVariant="textPrimary"
            children="Dekoracja hoteli i restauracji"
          />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Typography
            styleVariant="textPrimary"
            children="Sztuka ścienna, muzea itp."
          />
        </li>
      </ul>

      <div className={styles.advantagesConatiner}>
        <div className={styles.advantage}>
          <BsHouseDoor className={styles.advantageIcon} />
          <Typography
            styleVariant="textPrimary"
            children="Dekoracja domu nigdy nie była tak prosta! Uzupełnij puste ściany portretem rodzinnym, znanym na świecie obrazem lub inną grafiką na swój gust!"
          />
        </div>
        <div className={styles.advantage}>
          <FaRegBuilding className={styles.advantageIcon} />
          <Typography
            styleVariant="textPrimary"
            children="Wyróżnij swoje biuro, restauracje, kawiarnie niezapomnianą grafiką która przyciągnie uwagę klientów!"
          />
        </div>
      </div>

      <Typography
        heading
        styleVariant="headingPrimary"
        markedFragment="Wszystko "
        children="zrobisz bez żadnych przygotowań podłoża!"
      />
    </Layout>
  );
}

export default ForWhom;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["pageTitle"])),
    },
  };
};
