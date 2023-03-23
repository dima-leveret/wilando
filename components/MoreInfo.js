import Link from "next/link";
import styles from "../styles/Components/MoreInfo.module.css";
import { Typography } from "./Typography";
import { useTranslation } from "next-i18next";

export const MoreInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.moreInfo}>
      <Typography styleVariant="textPrimary">
        {t("moreInfo:moreInfo-text-1")}{" "}
        <Link href="/contact">
          <a className={styles.contactFormLink}>
            {t("moreInfo:moreInfo-text-2")}
          </a>
        </Link>{" "}
        {t("moreInfo:moreInfo-text-3")}{" "}
        <a
          className={styles.facebookLink}
          href="https://www.facebook.com/Wilando.wallprint"
          target="_blank"
        >
          Facebook
        </a>{" "}
        {t("moreInfo:moreInfo-text-4")}{" "}
        <a
          className={styles.instagramLink}
          href="https://www.instagram.com/wilando.wallprint/"
          target="_blank"
        >
          Instagram
        </a>{" "}
      </Typography>
    </div>
  );
};
