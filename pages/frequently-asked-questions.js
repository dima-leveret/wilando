import QuestionsAndAnswersList from "../components/questionsAndAnswers/QuestionsAndAnswersList";
import { Typography } from "../components/Typography";
import { MoreInfo } from "../components/MoreInfo";

function FrequentlyAskedQuestions() {
  return (
    <>
      <Typography styleVariant="pageTitle" children="FAQ" />
      <QuestionsAndAnswersList />
      <MoreInfo />
    </>
  );
}

export default FrequentlyAskedQuestions;
