import styles from "../../styles/Components/QuestionsAndAnswersItem.module.css";
import { BsPlusLg } from "react-icons/bs";

const QuestionsAndAnswersItem = ({
  question,
  answer,
  selectedId,
  itemId,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={styles.item}>
      <div className={styles.titleContainer}>
        <span className={styles.questionTitle}> {question} </span>
        <BsPlusLg className={ selectedId === itemId ? styles.plusIconRotated: styles.plusIcon} />
      </div>
      <span> {answer} </span>
    </div>
  );
};

export default QuestionsAndAnswersItem;
