import HeadComponent from "../components/HeadComponent";
import { search, mapImageResources } from "../src/lib/coudinary";
import CloudinaryGalery from "../components/CloudinaryGallery";
import { Typography } from "../components/Typography";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

function Galery({ images, nextCursor }) {
  const { t } = useTranslation("translation");

  return (
    <Layout>
      <HeadComponent title="Wilando | Galery" />

      <Typography styleVariant="pageTitle" children={t("page-title-gallery")} />

      <Typography styleVariant="textPrimary" children={t("gallery-title")} />

      <CloudinaryGalery images={images} nextCursor={nextCursor} />
    </Layout>
  );
}

export default Galery;

export async function getServerSideProps() {
  const results = await search({
    max_results: 9,
  });

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor: nextCursor || null,
    },
  };
}
