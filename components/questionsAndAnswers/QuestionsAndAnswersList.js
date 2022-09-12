import QuestionsAndAnswersItem from "./QuestionsAndAnswersItem";
import questionsAndAnswers from "./questionsAndAnswers.json";
import { useState } from "react";

const QuestionsAndAnswersList = () => {
  const [items, setItems] = useState([]);

  const handleOnItemClick = (itemId) => {
    items.push(itemId);
    console.log(items);
  };

  return (
    <div>
      {questionsAndAnswers.map((data) => (
        <QuestionsAndAnswersItem
          key={data.id}
          question={data.question}
          answer={data.answer}
          onClick={() => handleOnItemClick(data.id)}
        />
      ))}
    </div>
  );
};

export default QuestionsAndAnswersList;
