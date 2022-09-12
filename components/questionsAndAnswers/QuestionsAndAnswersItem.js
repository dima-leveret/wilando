import styles from "../../styles/Components/QuestionsAndAnswersItem.module.css";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

const QuestionsAndAnswersItem = ({ question, answer, onClick }) => {
  return (
    <div onClick={onClick} className={styles.item}>
      <div className={styles.titleContainer}>
        <span className={styles.questionTitle}> {question} </span>
        <BsPlusLg className={styles.plusIcon} />
      </div>
      <span> {answer} </span>
    </div>
  );
};

export default QuestionsAndAnswersItem;
