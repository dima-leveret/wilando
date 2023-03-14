import QuestionsAndAnswersList from "../components/questionsAndAnswers/QuestionsAndAnswersList";
import { Typography } from "../components/Typography";
import { MoreInfo } from "../components/MoreInfo";
import HeadComponent from "../components/HeadComponent";
import Layout from "../components/Layout";

function FrequentlyAskedQuestions() {
  return (
    <Layout>
      <HeadComponent title="Wilando | FAQ" />
      <Typography styleVariant="pageTitle" children="FAQ" />
      <QuestionsAndAnswersList />
      <MoreInfo />
    </Layout>
  );
}

export default FrequentlyAskedQuestions;
