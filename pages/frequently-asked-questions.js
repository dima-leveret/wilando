import QuestionsAndAnswersList from "../components/questionsAndAnswers/QuestionsAndAnswersList";
import { Typography } from "../components/Typography";
import { MoreInfo } from "../components/MoreInfo";
import HeadComponent from "../components/HeadComponent";
import Layout from "../components/Layout";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

function FrequentlyAskedQuestions() {
  const { t } = useTranslation("translation");
  return (
    <Layout>
      <HeadComponent title="Wilando | FAQ" />
      <Typography styleVariant="pageTitle" children={t("page-title-faq")} />
      <QuestionsAndAnswersList />
      <MoreInfo />
    </Layout>
  );
}

export default FrequentlyAskedQuestions;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["pageTitle"])),
//     },
//   };
// }
