import { GiMountains } from "react-icons/gi";
import { CgPlayButtonO } from "react-icons/cg";
import { TbWall, TbFlower, TbClock2 } from "react-icons/tb";
import { GoEye } from "react-icons/go";
import { Typography } from "./Typography";
import styles from "../styles/Components/Advantages.module.css";
import { useTranslation } from "next-i18next";

export const Advantages = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography
        styleVariant="headingPrimary"
        heading
        markedFragment={t("advantages:advantages-title-1")}
        children={t("advantages:advantages-title-2")}
      />
      <div className={styles.advantagesConatiner}>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <GiMountains className={styles.advantageIcon} />
            <span>{t("advantages:advantages-subtitle-1")}</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children={t("advantages:advantages-text-1")}
          />
        </div>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <CgPlayButtonO className={styles.advantageIcon} />
            <span>{t("advantages:advantages-subtitle-2")}</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children={t("advantages:advantages-text-2")}
          />
        </div>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <TbWall className={styles.advantageIcon} />
            <span>{t("advantages:advantages-subtitle-3")}</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children={t("advantages:advantages-text-3")}
          />
        </div>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <TbFlower className={styles.advantageIcon} />
            <span>{t("advantages:advantages-subtitle-4")}</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children={t("advantages:advantages-text-4")}
          />
        </div>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <TbClock2 className={styles.advantageIcon} />
            <span>{t("advantages:advantages-subtitle-5")}</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children={t("advantages:advantages-text-5")}
          />
        </div>
        <div className={styles.advantage}>
          <div className={styles.advantageTitle}>
            <GoEye className={styles.advantageIcon} />
            <span>{t("advantages:advantages-subtitle-6")}</span>
          </div>
          <Typography
            styleVariant="textPrimary"
            children={t("advantages:advantages-text-6")}
          />
        </div>
      </div>
    </>
  );
};
