import styles from "../../styles/Components/QuestionsAndAnswersItem.module.css";
import { BsPlusLg } from "react-icons/bs";
import { Text } from "../Typography";

const QuestionsAndAnswersItem = ({
  question,
  answer,
  selectedId,
  itemId,
  onClick,
}) => {
  return (
    <div className={styles.item}>
      <div onClick={onClick} className={styles.titleContainer}>
        <span className={styles.questionTitle}> {question} </span>
        <div className={styles.plusIconContainer}>
          <BsPlusLg
            className={
              selectedId === itemId ? styles.plusIconRotated : styles.plusIcon
            }
          />
        </div>
      </div>
      <span
        className={
          selectedId === itemId ? styles.answerOpened : styles.answerClosed
        }
      >
        {answer}
      </span>
    </div>
  );
};

export default QuestionsAndAnswersItem;
