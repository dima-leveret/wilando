import QuestionsAndAnswersList from "../components/questionsAndAnswers/QuestionsAndAnswersList";
import PageTitle from "../components/PageTitle";
import { MoreInfo } from "../components/MoreInfo";

function FrequentlyAskedQuestions() {
  return (
    <>
      <PageTitle title="FAQ" />
      <QuestionsAndAnswersList />
      <MoreInfo />
    </>
  );
}

export default FrequentlyAskedQuestions;
