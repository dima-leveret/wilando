import QuestionsAndAnswersList from "../components/questionsAndAnswers/QuestionsAndAnswersList";
import { Typography } from "../components/Typography";
import { MoreInfo } from "../components/MoreInfo";
import HeadComponent from "../components/HeadComponent";

function FrequentlyAskedQuestions() {
  return (
    <>
      <HeadComponent title="Wilando | FAQ" />
      <Typography styleVariant="pageTitle" children="FAQ" />
      <QuestionsAndAnswersList />
      <MoreInfo />
    </>
  );
}

export default FrequentlyAskedQuestions;
