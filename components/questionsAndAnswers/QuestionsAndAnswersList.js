import QuestionsAndAnswersItem from "./QuestionsAndAnswersItem";
import questionsAndAnswers from "./questionsAndAnswers.json";

const QuestionsAndAnswersList = () => {
  return (
    <div>
      {questionsAndAnswers.map((data) => (
        <QuestionsAndAnswersItem
          key={data.id}
          question={data.question}
          answer={data.answer}
        />
      ))}
    </div>
  );
};

export default QuestionsAndAnswersList;
