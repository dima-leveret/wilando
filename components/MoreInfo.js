import Link from "next/link";
import styles from "../styles/Components/MoreInfo.module.css";

export const MoreInfo = () => {
  return (
    <p className={styles.moreInfo}>
      Po więcej szczegółów zapraszamy do kontaktu przez nasz{" "}
      <Link href="/contact">
        <a className={styles.contactFormLink}>formularz kontaktowy</a>
      </Link>{" "}
      oraz przez nasze strony na{" "}
      <a
        className={styles.facebookLink}
        href="https://www.facebook.com/Wilando.wallprint"
        target="_blank"
      >
        Facebook
      </a>{" "}
      lub{" "}
      <a
        className={styles.instagramLink}
        href="https://www.instagram.com/wilando.wallprint/"
        target="_blank"
      >
        Instagram
      </a>{" "}
    </p>
  );
};
