import HeadComponent from "../components/HeadComponent";
import styles from "../styles/pages/Price-list.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { MoreInfo } from "../components/MoreInfo";
import { Typography } from "../components/Typography";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

function PriceList() {
  const { t } = useTranslation("translation");
  return (
    <Layout>
      <HeadComponent title="Wilando | Price list" />
      <Typography
        styleVariant="pageTitle"
        children={t("page-title-price-list")}
      />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Typography
            styleVariant="textPrimary"
            children={t("price-list-text-1")}
          />
          <Typography
            styleVariant="textPrimary"
            children={t("price-list-text-2")}
          />
        </div>

        <div className={styles.pricing}>
          <Typography
            heading
            styleVariant="headingPrimary"
            markedFragment={t("price-list-title-1")}
            children={t("price-list-title-2")}
          />
          <ul className={styles.procingList}>
            <li>
              <IoIosArrowForward className={styles.liIcon} />
              <Typography
                styleVariant="textPrimary"
                children={t("price-list-li-1")}
              />
            </li>
            <li>
              <IoIosArrowForward className={styles.liIcon} />
              <Typography
                styleVariant="textPrimary"
                children={t("price-list-li-2")}
              />
            </li>
            <li>
              <IoIosArrowForward className={styles.liIcon} />
              <Typography
                styleVariant="textPrimary"
                children={t("price-list-li-3")}
              />
            </li>
            <li>
              <IoIosArrowForward className={styles.liIcon} />
              <Typography
                styleVariant="textPrimary"
                children={t("price-list-li-4")}
              />
            </li>
            <li>
              <IoIosArrowForward className={styles.liIcon} />
              <Typography
                styleVariant="textPrimary"
                children={t("price-list-li-5")}
              />
            </li>
          </ul>
        </div>
      </div>
      <MoreInfo />
    </Layout>
  );
}

export default PriceList;
