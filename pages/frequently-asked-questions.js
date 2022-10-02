import QuestionsAndAnswersList from "../components/questionsAndAnswers/QuestionsAndAnswersList";
import PageTitle from "../components/PageTitle";
import styles from "../styles/pages/FrequentlyAskedQuestions.module.css";
import Link from "next/link";

function FrequentlyAskedQuestions() {
  return (
    <>
      <PageTitle title="FAQ" />
      <QuestionsAndAnswersList />
      <p className={styles.moreInfo} >
        Po więcej szczegółów zapraszamy do kontaktu przez nasz{" "}
        <Link href="/contact">
          <a className={styles.contactFormLink} >formularz kontaktowy</a>
        </Link>{" "}
        oraz przez nasze strony na{" "}
        <a
          className={styles.facebookLink}
          href="https://www.facebook.com/Wilando.print"
          target="blank"
        >
          Facebook
        </a>{" "}
        lub{" "}
        <a className={styles.instagramLink} href="#" target="blank">
          Instagram
        </a>{" "}
      </p>
    </>
  );
}

export default FrequentlyAskedQuestions;
