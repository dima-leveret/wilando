import { Typography } from "./Typography";
import styles from "../styles/Components/HowToMakeOrder.module.css";
import { ImLink } from "react-icons/im";
import { useTranslation } from "react-i18next";

export const HowToMakeOrder = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography
        heading
        styleVariant="headingPrimary"
        markedFragment={t("makeOrder-title-1")}
        children={t("makeOrder-title-2")}
      />
      <ul className={styles.makeOrderList}>
        <li>
          <Typography styleVariant="textPrimary" children={t("makeOrder-1")} />
        </li>
        <li>
          <Typography styleVariant="textPrimary" children={t("makeOrder-2")} />
        </li>
        <li>
          <Typography styleVariant="textPrimary" children={t("makeOrder-3")} />
          <ul className={styles.sitesList}>
            <li>
              <a
                className={styles.siteLink}
                href="https://unsplash.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Unsplash
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://pixabay.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Pixabay
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://gratisography.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Gratisography
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://www.shutterstock.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Shutterstock
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://www.freepik.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Freepik
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://www.istockphoto.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                iStockphoto
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://depositphotos.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                Depositphotos
              </a>
            </li>
            <li>
              <a
                className={styles.siteLink}
                href="https://www.123rf.com/"
                target="_blank"
              >
                <ImLink className={styles.linkIcon} />
                123rf
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Typography styleVariant="textPrimary">
            {t("makeOrder-4-1")}{" "}
            <a href="mailto: wilando.art@gmail.com" className={styles.mail}>
              wilando.art@gmail.com
            </a>{" "}
            {t("makeOrder-4-2")}
          </Typography>
        </li>
        <li>
          <Typography styleVariant="textPrimary" children={t("makeOrder-5")} />
        </li>
      </ul>
    </>
  );
};
