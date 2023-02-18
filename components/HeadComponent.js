import Head from "next/head";

const HeadComponent = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link href="../public/favicon.ico" />
      <meta
        name="description"
        content="Dekoracja ścian, Druk na płótnie, STWÓRZ WŁASNY OBRAZ NA PŁÓTNIE"
      ></meta>
      <meta
        name="keywords"
        content="dekoracja ścian, druk na płótnie, druk na ścianach, druk na ścianach Poznań, druk na ścianach Polska, druk na płótnie Poznan, druk na płótnie Polska, druk, Wilando, druk na scianach i płótnie wilando, STWÓRZ WŁASNY OBRAZ NA PŁÓTNIE, stwórz własny obraz na płótnie, Poznan druk na scianach i pplotnie, Poznan Wilando"
      ></meta>
    </Head>
  );
};

export default HeadComponent;
