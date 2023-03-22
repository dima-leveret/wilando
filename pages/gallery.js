import HeadComponent from "../components/HeadComponent";
import { search, mapImageResources } from "../src/lib/coudinary";
import CloudinaryGalery from "../components/CloudinaryGallery";
import { Typography } from "../components/Typography";
import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Galery({ images, nextCursor }) {
  const { t } = useTranslation("pageTitle");

  return (
    <Layout>
      <HeadComponent title="Wilando | Galery" />

      <Typography styleVariant="pageTitle" children={t("page-title-gallery")} />

      <Typography
        styleVariant="textPrimary"
        children="Zainspiruj się naszymi drukami! Każdy obraz może być nadrukowany u
        Ciebie!"
      />

      <CloudinaryGalery images={images} nextCursor={nextCursor} />
    </Layout>
  );
}

export default Galery;

export const getServerSideProps = async ({ locale }) => {
  const results = await search({
    max_results: 9,
  });

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor: nextCursor || null,
      ...(await serverSideTranslations(locale, ["pageTitle"])),
    },
  };
};
