import QuestionsAndAnswersItem from "./QuestionsAndAnswersItem";
import questionsAndAnswers from "./questionsAndAnswers.json";
import { useState } from "react";

const QuestionsAndAnswersList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleOnItemClick = (itemId) => {
    if (selectedId === itemId) {
      return setSelectedId(null);
    }
    setSelectedId(itemId);
  };

  return (
    <div>
      {questionsAndAnswers.map((data) => (
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
