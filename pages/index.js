import HeadComponent from "../components/HeadComponent";
import Slider from "../components/Slider";
import styles from "../styles/pages/Home.module.css";
import { Advantages } from "../components/Advantages";
import { HowToMakeOrder } from "../components/HowToMakeOrder";
import Link from "next/link";
import { MoreInfo } from "../components/MoreInfo";
import { Typography } from "../components/Typography";
import Layout from "../components/Layout";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("translation");
  return (
    <Layout>
      <HeadComponent title="Wilando" />

      <Typography styleVariant="pageTitle" children={t("page-title-index")} />

      <Slider />

      <div className={styles.home}>
        <div className={styles.homeContainer}>
          <Typography
            styleVariant="headingPrimary"
            heading
            markedFragment={t("home-greatings-1")}
            children={t("home-greatings-2")}
          />
          <Typography styleVariant="textPrimary" children={t("home-text-1")} />
          <Typography
            heading
            markedFragment={t("home-title-1")}
            styleVariant="headingPrimary"
            children={t("home-title-2")}
          />
          <Typography styleVariant="textPrimary" children={t("home-text-2")} />

          <Advantages />
          <HowToMakeOrder />

          <Typography
            heading
            styleVariant="headingPrimary"
            markedFragment={t("home-title-3")}
            children={t("home-title-4")}
          />
          <Typography styleVariant="textPrimary">
            {t("home-text-3")}{" "}
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

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         "pageTitle",
//         "homePage",
//         "advantages",
//         "makeOrder",
//         "slider",
//         "moreInfo",
//       ])),
//     },
//   };
// }
