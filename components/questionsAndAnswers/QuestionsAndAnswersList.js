import QuestionsAndAnswersItem from "./QuestionsAndAnswersItem";
import styles from "../../styles/Components/QuestionsAndAnswersList.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const QuestionsAndAnswersList = () => {
  const { t } = useTranslation("translation");

  const faq = t("faq", { returnObjects: true });

  const [selectedId, setSelectedId] = useState(null);

  const handleOnItemClick = (itemId) => {
    if (selectedId === itemId) {
      return setSelectedId(null);
    }
    setSelectedId(itemId);
  };

  return (
    <div className={styles.listConatiner}>
      {faq.map((data) => (
        <QuestionsAndAnswersItem
          key={data.id}
          question={data.question}
          answer={data.answer}
          onClick={() => handleOnItemClick(data.id)}
          selectedId={selectedId}
          itemId={data.id}
        />
      ))}
    </div>
  );
};

export default QuestionsAndAnswersList;
