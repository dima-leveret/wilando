import HeadComponent from "../components/HeadComponent";
import Layout from "../components/Layout";
import styles from "../styles/pages/For-whom.module.css";
import { Typography } from "../components/Typography";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ForWhom() {
  const { t } = useTranslation("translation");

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
        markedFragment={t("for-whom-title-1-1")}
        children={t("for-whom-title-1-2")}
      />
      <Typography styleVariant="textPrimary" children={t("for-whom-text-1")} />

      <Typography
        styleVariant="headingPrimary"
        heading
        markedFragment={t("for-whom-title-2-1")}
        children={t("for-whom-title-2-2")}
      />
      <ul className={styles.industriesList}>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Typography
            styleVariant="textPrimary"
            children={t("for-whom-li-1")}
          />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Typography
            styleVariant="textPrimary"
            children={t("for-whom-li-2")}
          />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Typography
            styleVariant="textPrimary"
            children={t("for-whom-li-3")}
          />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Typography
            styleVariant="textPrimary"
            children={t("for-whom-li-4")}
          />
        </li>
        <li>
          <AiOutlineArrowRight className={styles.liIcon} />
          <Typography
            styleVariant="textPrimary"
            children={t("for-whom-li-5")}
          />
        </li>
      </ul>

      <div className={styles.advantagesConatiner}>
        <div className={styles.advantage}>
          <BsHouseDoor className={styles.advantageIcon} />
          <Typography
            styleVariant="textPrimary"
            children={t("for-whom-text-2")}
          />
        </div>
        <div className={styles.advantage}>
          <FaRegBuilding className={styles.advantageIcon} />
          <Typography
            styleVariant="textPrimary"
            children={t("for-whom-text-3")}
          />
        </div>
      </div>

      <Typography
        heading
        styleVariant="headingPrimary"
        markedFragment={t("for-whom-title-3-1")}
        children={t("for-whom-title-3-2")}
      />
    </Layout>
  );
}

export default ForWhom;
