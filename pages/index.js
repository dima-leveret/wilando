import HeadComponent from "../components/HeadComponent";
import Slider from "../components/Slider";
import styles from "../styles/pages/Home.module.css";
import { Advantages } from "../components/Advantages";
import { HowToMakeOrder } from "../components/HowToMakeOrder";
import Link from "next/link";
import { MoreInfo } from "../components/MoreInfo";
import { Typography } from "../components/Typography";
import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <HeadComponent title="Wilando" />

      <Typography
        styleVariant="pageTitle"
        children={t("pageTitle:page-title-index")}
      />

      <Slider />

      <div className={styles.home}>
        <div className={styles.homeContainer}>
          <Typography
            styleVariant="headingPrimary"
            heading
            markedFragment={t("homePage:home-greatings-1")}
            children={t("homePage:home-greatings-2")}
          />
          <Typography
            styleVariant="textPrimary"
            children={t("homePage:home-text-1")}
          />
          <Typography
            heading
            markedFragment={t("homePage:home-title-1")}
            styleVariant="headingPrimary"
            children={t("homePage:home-title-2")}
          />
          <Typography
            styleVariant="textPrimary"
            children={t("homePage:home-text-2")}
          />

          <Advantages />
          <HowToMakeOrder />

          <Typography
            heading
            styleVariant="headingPrimary"
            markedFragment={t("homePage:home-title-3")}
            children={t("homePage:home-title-4")}
          />
          <Typography styleVariant="textPrimary">
            {t("homePage:home-text-3")}{" "}
            <Link href="/frequently-asked-questions">
              <a className={styles.linkToFAQ}>FAQ</a>
            </Link>
            .
          </Typography>
        </div>
      </div>
      <MoreInfo />
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "pageTitle",
        "homePage",
        "advantages",
        "makeOrder",
        "slider",
        "moreInfo",
      ])),
    },
  };
};
