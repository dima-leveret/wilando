import Head from "next/head";

const HeadComponent = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link href="../public/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
